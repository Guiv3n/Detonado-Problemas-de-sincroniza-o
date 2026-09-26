const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const toast = (message) => {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
};

$$('.game-tab').forEach((tab) => tab.addEventListener('click', () => {
  $$('.game-tab').forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  $$('.game-panel').forEach((panel) => { panel.hidden = true; panel.classList.remove('active'); });
  tab.classList.add('active');
  tab.setAttribute('aria-selected', 'true');
  const panel = $(`#game-${tab.dataset.game}`);
  panel.hidden = false;
  panel.classList.add('active');
}));

const philosophers = {
  running: false,
  time: 45,
  score: 0,
  hunger: [0, 0, 0, 0, 0],
  eating: new Set(),
  timer: null,
};

function renderPhilosophers() {
  $('#ph-time').textContent = `${philosophers.time}s`;
  $('#ph-score').textContent = philosophers.score;
  $$('.philosopher').forEach((el, index) => {
    const value = philosophers.hunger[index];
    const satiety = 100 - value;
    $('.hunger i', el).style.width = `${satiety}%`;
    $('.hunger i', el).style.background = satiety < 28 ? 'var(--red)' : satiety < 52 ? 'var(--amber)' : 'var(--teal)';
    $('.hunger', el).setAttribute('aria-label', `${Math.round(satiety)}% de saciedade`);
    el.classList.toggle('eating', philosophers.eating.has(index));
    el.classList.toggle('danger', value > 72);
    el.setAttribute('aria-label', `${$('.ph-name', el).textContent}: ${Math.round(value)}% de fome${philosophers.eating.has(index) ? ', comendo' : ''}`);
  });
  $$('.fork').forEach((el, index) => {
    const owner = [...philosophers.eating].find((p) => p === index || (p + 1) % 5 === index);
    const busy = owner !== undefined;
    el.classList.toggle('busy', busy);
    if (busy) el.dataset.owner = owner;
    else delete el.dataset.owner;
    el.setAttribute('aria-label', busy
      ? `Garfo ${index + 1}, sendo usado por ${$('.ph-name', $(`.philosopher-${owner}`)).textContent}`
      : `Garfo ${index + 1}, disponível na mesa`);
  });
}

function endPhilosophers(won) {
  philosophers.running = false;
  clearInterval(philosophers.timer);
  philosophers.eating.clear();
  $('#ph-status').textContent = won ? 'Vitória!' : 'Starvation';
  toast(won ? `Mesa equilibrada: ${philosophers.score} refeições!` : 'Um filósofo ficou sem comer. Tente alternar melhor.');
  renderPhilosophers();
}

function resetPhilosophers() {
  clearInterval(philosophers.timer);
  Object.assign(philosophers, { running: false, time: 45, score: 0, hunger: [0, 0, 0, 0, 0], eating: new Set() });
  $('#ph-status').textContent = 'Pronto';
  $('#ph-start').textContent = 'Iniciar rodada';
  renderPhilosophers();
}

function startPhilosophers() {
  if (philosophers.running) return;
  if (philosophers.time <= 0 || philosophers.hunger.some((h) => h >= 100)) resetPhilosophers();
  philosophers.running = true;
  $('#ph-status').textContent = 'Em curso';
  $('#ph-start').textContent = 'Rodada ativa';
  philosophers.timer = setInterval(() => {
    philosophers.time -= 1;
    philosophers.hunger = philosophers.hunger.map((h, index) => Math.max(0, Math.min(100, h + (philosophers.eating.has(index) ? -18 : 5.2))));
    if (philosophers.hunger.some((h) => h >= 100)) return endPhilosophers(false);
    if (philosophers.time <= 0) return endPhilosophers(true);
    renderPhilosophers();
  }, 1000);
}

$$('.philosopher').forEach((button) => button.addEventListener('click', () => {
  if (!philosophers.running) return toast('Inicie a rodada primeiro.');
  const index = Number(button.dataset.philosopher);
  if (philosophers.eating.has(index)) return;
  const left = (index + 4) % 5;
  const right = (index + 1) % 5;
  if (philosophers.eating.has(left) || philosophers.eating.has(right)) return toast('Garfo ocupado: um vizinho já está comendo.');
  philosophers.eating.add(index);
  $('#ph-status').textContent = `${$('.ph-name', button).textContent} come`;
  renderPhilosophers();
  setTimeout(() => {
    if (!philosophers.eating.has(index)) return;
    philosophers.eating.delete(index);
    philosophers.hunger[index] = Math.max(0, philosophers.hunger[index] - 38);
    philosophers.score += 1;
    if (philosophers.running) $('#ph-status').textContent = 'Em curso';
    renderPhilosophers();
  }, 2400);
}));

$('#ph-start').addEventListener('click', startPhilosophers);
$('#ph-reset').addEventListener('click', resetPhilosophers);
renderPhilosophers();

// Produtor–Consumidor: um buffer limitado protegido por operações seguras.
const producer = { running: false, time: 40, score: 0, orders: 0, items: 0, timer: null };

function renderProducer() {
  $('#pc-time').textContent = `${producer.time}s`;
  $('#pc-score').textContent = producer.score;
  $('#pc-orders').textContent = producer.orders;
  $('#pc-buffer-label').textContent = `${producer.items} / 6 pães`;
  $('#pc-orders-stage').textContent = `${producer.orders} ${producer.orders === 1 ? 'aguardando' : 'aguardando'}`;
  $('#pc-buffer').innerHTML = Array.from({ length: 6 }, (_, i) => `<span class="buffer-slot ${i < producer.items ? 'filled' : ''}" aria-label="${i < producer.items ? 'Ocupado' : 'Livre'}">${i < producer.items ? '◉' : '·'}</span>`).join('');
  $('#pc-order-queue').innerHTML = Array.from({ length: 5 }, (_, i) => `<span class="order-ticket ${i < producer.orders ? 'pending' : ''}" aria-label="${i < producer.orders ? `Pedido ${i + 1} aguardando` : 'Posição livre na fila'}"><b>${i < producer.orders ? String(i + 1).padStart(2, '0') : '—'}</b><small>${i < producer.orders ? 'PEDIDO' : 'LIVRE'}</small></span>`).join('');
  $('#pc-produce').disabled = !producer.running;
  $('#pc-consume').disabled = !producer.running;
  $('#pc-consume').textContent = producer.orders > 0 ? `Entregar pedido (${producer.orders}) →` : 'Entregar pedido →';
  $('.consumer-station').classList.toggle('has-orders', producer.orders > 0);
}

function resetProducer() {
  clearInterval(producer.timer);
  Object.assign(producer, { running: false, time: 40, score: 0, orders: 0, items: 0 });
  $('#pc-message').textContent = 'O mutex está livre.';
  $('#pc-start').textContent = 'Iniciar turno';
  renderProducer();
}

function endProducer(won, message) {
  producer.running = false;
  clearInterval(producer.timer);
  $('#pc-start').textContent = won ? 'Turno concluído' : 'Tentar novamente';
  $('#pc-message').textContent = message;
  toast(message);
  renderProducer();
}

function startProducer() {
  if (producer.running) return;
  if (producer.time <= 0 || producer.orders >= 5) resetProducer();
  producer.running = true;
  $('#pc-start').textContent = 'Turno ativo';
  $('#pc-message').textContent = 'Um novo pedido pode chegar a qualquer momento.';
  producer.timer = setInterval(() => {
    producer.time -= 1;
    if (Math.random() < .42) {
      producer.orders += 1;
      $('#pc-message').textContent = 'Pedido recebido: itens disponíveis sinalizados pelo semáforo.';
    }
    if (producer.orders >= 5) return endProducer(false, 'Fila saturada: os consumidores esperaram demais.');
    if (producer.score >= 12) return endProducer(true, 'Turno vencido: buffer e pedidos ficaram equilibrados!');
    if (producer.time <= 0) return endProducer(producer.score >= 12, producer.score >= 12 ? 'Turno vencido!' : 'O tempo acabou antes das 12 entregas.');
    renderProducer();
  }, 1000);
  renderProducer();
}

$('#pc-produce').addEventListener('click', () => {
  if (producer.items >= 6) { $('#pc-message').textContent = 'wait(vagas): buffer cheio, produtor bloqueado.'; return toast('Semáforo “vagas” = 0. Produção bloqueada.'); }
  producer.items += 1;
  $('#pc-message').textContent = 'Região crítica acessada; item inserido e mutex liberado.';
  renderProducer();
});
$('#pc-consume').addEventListener('click', () => {
  if (producer.items <= 0) { $('#pc-message').textContent = 'wait(itens): buffer vazio, consumidor bloqueado.'; return toast('Semáforo “itens” = 0. Consumo bloqueado.'); }
  if (producer.orders <= 0) return toast('Ainda não existe pedido para entregar.');
  producer.items -= 1; producer.orders -= 1; producer.score += 1;
  $('#pc-message').textContent = 'Item retirado; uma vaga foi sinalizada ao produtor.';
  if (producer.score >= 12) endProducer(true, 'Turno vencido: buffer e pedidos ficaram equilibrados!'); else renderProducer();
});
$('#pc-start').addEventListener('click', startProducer);
$('#pc-reset').addEventListener('click', resetProducer);
renderProducer();

// Barbeiro Adormecido: clientes sinalizam trabalho; o barbeiro dorme sem fila.
const barber = { running: false, time: 45, score: 0, lost: 0, waiting: 0, cutting: false, timer: null };

function renderBarber() {
  $('#sb-time').textContent = `${barber.time}s`;
  $('#sb-score').textContent = barber.score;
  $('#sb-lost').textContent = `${barber.lost} / 3`;
  $('#sb-waiting-label').textContent = `${barber.waiting} / 3`;
  $('#sb-chairs').innerHTML = Array.from({ length: 3 }, (_, i) => `<span class="chair ${i < barber.waiting ? 'occupied' : ''}" aria-label="${i < barber.waiting ? 'Cliente esperando' : 'Cadeira livre'}">${i < barber.waiting ? '●' : '⌑'}</span>`).join('');
  $('#sb-call').disabled = !barber.running || barber.cutting;
  $('#sb-barber-icon').classList.toggle('cutting', barber.cutting);
  $('#sb-customer-art').classList.toggle('active', barber.cutting);
  $('#sb-barber-icon').textContent = barber.cutting ? '✂' : 'Zz';
  $('#sb-barber-state').textContent = barber.cutting ? 'ATENDENDO' : barber.waiting ? 'ACORDADO' : 'DORMINDO';
}

function resetBarber() {
  clearInterval(barber.timer);
  Object.assign(barber, { running: false, time: 45, score: 0, lost: 0, waiting: 0, cutting: false });
  $('#sb-message').textContent = 'Aguardando abrir.';
  $('#sb-start').textContent = 'Abrir barbearia';
  renderBarber();
}

function endBarber(won, message) {
  barber.running = false;
  barber.cutting = false;
  clearInterval(barber.timer);
  $('#sb-message').textContent = message;
  $('#sb-start').textContent = won ? 'Expediente concluído' : 'Tentar novamente';
  toast(message);
  renderBarber();
}

function startBarber() {
  if (barber.running) return;
  if (barber.time <= 0 || barber.lost >= 3) resetBarber();
  barber.running = true;
  $('#sb-start').textContent = 'Barbearia aberta';
  $('#sb-message').textContent = 'Sem clientes: barbeiro bloqueado, sem gastar CPU.';
  barber.timer = setInterval(() => {
    barber.time -= 1;
    if (Math.random() < .36) {
      if (barber.waiting < 3) { barber.waiting += 1; $('#sb-message').textContent = 'Cliente chegou e sinalizou o semáforo “clientes”.'; }
      else { barber.lost += 1; $('#sb-message').textContent = 'Sala cheia: cliente foi embora.'; }
    }
    if (barber.lost >= 3) return endBarber(false, 'Três clientes desistiram: a sala de espera saturou.');
    if (barber.score >= 8) return endBarber(true, 'Barbearia sincronizada: oito clientes atendidos!');
    if (barber.time <= 0) return endBarber(barber.score >= 8, barber.score >= 8 ? 'Expediente vencido!' : 'O expediente acabou antes dos oito cortes.');
    renderBarber();
  }, 1000);
  renderBarber();
}

$('#sb-call').addEventListener('click', () => {
  if (barber.cutting) return;
  if (!barber.waiting) { $('#sb-message').textContent = 'wait(clientes): fila vazia, barbeiro volta a dormir.'; return toast('Nenhum cliente. O barbeiro deve dormir.'); }
  barber.waiting -= 1; barber.cutting = true;
  $('#sb-message').textContent = 'Cliente retirado da fila; corte em andamento.';
  renderBarber();
  setTimeout(() => {
    if (!barber.cutting) return;
    barber.cutting = false; barber.score += 1;
    $('#sb-message').textContent = barber.waiting ? 'Corte pronto. Há outro cliente esperando.' : 'Fila vazia: barbeiro dorme até o próximo sinal.';
    if (barber.running && barber.score >= 8) endBarber(true, 'Barbearia sincronizada: oito clientes atendidos!'); else renderBarber();
  }, 2200);
});
$('#sb-start').addEventListener('click', startBarber);
$('#sb-reset').addEventListener('click', resetBarber);
renderBarber();
