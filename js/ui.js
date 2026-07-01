/**
 * ui.js
 * Rendering functions. Each function owns one piece of the DOM and is
 * pure with respect to the data module — no rendering function mutates
 * the data arrays it's given.
 */

import { skillGroups, projects } from './data.js';

const accentMap = {
  red: { text: 'text-red-500', ring: 'group-hover:border-red-600/50', glow: 'group-hover:shadow-red-600/10', bg: 'bg-red-600/10' },
  emerald: { text: 'text-emerald-400', ring: 'group-hover:border-emerald-500/50', glow: 'group-hover:shadow-emerald-500/10', bg: 'bg-emerald-500/10' },
  blue: { text: 'text-blue-400', ring: 'group-hover:border-blue-500/50', glow: 'group-hover:shadow-blue-500/10', bg: 'bg-blue-500/10' },
  amber: { text: 'text-amber-400', ring: 'group-hover:border-amber-500/50', glow: 'group-hover:shadow-amber-500/10', bg: 'bg-amber-500/10' },
};

/** Renders the categorized Skills section (Frontend / Backend / Database / Tools). */
export function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skillGroups
    .map((group) => {
      const a = accentMap[group.accent];
      return `
      <div class="group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.07] ${a.ring} hover:shadow-2xl ${a.glow}">
        <div class="flex items-center gap-3 mb-6">
          <div class="p-3 rounded-2xl ${a.bg} border border-white/5">
            <i class="${group.icon} ${a.text} text-lg" aria-hidden="true"></i>
          </div>
          <h3 class="text-lg font-bold text-white tracking-tight">${group.label}</h3>
        </div>
        <ul class="flex flex-wrap gap-2" role="list">
          ${group.skills
            .map(
              (skill) => `
            <li class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/70 border border-white/5 text-gray-300 text-xs sm:text-sm font-medium">
              <i class="${skill.icon} ${a.text} text-xs" aria-hidden="true"></i>
              ${skill.name}
            </li>`
            )
            .join('')}
        </ul>
      </div>`;
    })
    .join('');
}

/** Renders the Featured Projects grid. */
export function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (project) => `
      <article class="group bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-500 focus-within:border-red-600/50">
        <button
          type="button"
          class="block w-full text-left cursor-pointer"
          data-project-id="${project.id}"
          aria-haspopup="dialog"
          aria-label="View details for ${project.title}"
        >
          <div class="relative overflow-hidden aspect-video">
            <img
              src="${project.images[0]}"
              alt="Screenshot of ${project.title}"
              loading="lazy"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="bg-white text-black px-6 py-2 rounded-full font-bold shadow-xl">View Project</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-2">${project.title}</h3>
            <p class="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">${project.summary}</p>
            <div class="flex flex-wrap gap-2">
              ${project.stack
                .slice(0, 4)
                .map((s) => `<span class="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded-md uppercase tracking-wide">${s}</span>`)
                .join('')}
            </div>
          </div>
        </button>
      </article>`
    )
    .join('');

  grid.querySelectorAll('[data-project-id]').forEach((btn) => {
    btn.addEventListener('click', () => openProjectDetails(btn.dataset.projectId));
  });
}

let lastFocusedElement = null;

/** Opens the full-screen project detail view for a given project id. */
export function openProjectDetails(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;

  lastFocusedElement = document.activeElement;
  const page = document.getElementById('project-details-page');

  document.getElementById('project-title').textContent = project.title;
  document.getElementById('project-role').textContent = project.role;
  document.getElementById('project-desc').textContent = project.description;
  document.getElementById('project-challenges').textContent = project.challenges;
  document.getElementById('project-link').href = project.link;
  document.getElementById('project-github').href = project.github;

  const mainImg = document.getElementById('main-view-img');
  mainImg.src = project.images[0];
  mainImg.alt = `${project.title} — main screenshot`;

  document.getElementById('project-skills').innerHTML = project.stack
    .map((s) => `<span class="px-4 py-1.5 bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-black rounded-full uppercase italic">${s}</span>`)
    .join('');

  document.getElementById('project-features').innerHTML = project.features
    .map((f) => `<li class="flex items-start gap-3 text-gray-300 text-sm"><i class="fa-solid fa-check text-red-500 mt-1" aria-hidden="true"></i><span>${f}</span></li>`)
    .join('');

  document.getElementById('thumbnails-container').innerHTML = project.images
    .map(
      (img, i) => `
      <button
        type="button"
        data-img="${img}"
        aria-label="Show screenshot ${i + 1} of ${project.title}"
        class="thumb-btn flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${i === 0 ? 'border-red-600' : 'border-transparent opacity-50'}"
      >
        <img src="${img}" alt="" class="w-full h-full object-cover" loading="lazy" />
      </button>`
    )
    .join('');

  page.querySelectorAll('.thumb-btn').forEach((btn) => {
    btn.addEventListener('click', () => changeMainImg(btn.dataset.img, btn));
  });

  page.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('close-project-btn').focus();
}

function changeMainImg(src, el) {
  const mainImg = document.getElementById('main-view-img');
  mainImg.src = src;
  document.querySelectorAll('#thumbnails-container .thumb-btn').forEach((d) => {
    d.classList.remove('border-red-600');
    d.classList.add('border-transparent', 'opacity-50');
  });
  el.classList.remove('border-transparent', 'opacity-50');
  el.classList.add('border-red-600');
}

export function closeProjectDetails() {
  document.getElementById('project-details-page').classList.add('hidden');
  document.body.style.overflow = 'auto';
  if (lastFocusedElement) lastFocusedElement.focus();
}

export function openFullscreenModal(src, alt) {
  const modal = document.getElementById('fullscreen-modal');
  const img = document.getElementById('modal-img');
  img.src = src;
  img.alt = alt || '';
  modal.classList.remove('hidden');
}

export function closeFullscreenModal() {
  document.getElementById('fullscreen-modal').classList.add('hidden');
}
