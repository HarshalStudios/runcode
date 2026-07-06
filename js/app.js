/* 
  RunCode IDE - High-Fidelity Compiler & Emulator Simulator Engine
  Syncs vanilla frontend with React MockupEditor.tsx state architectures.
*/

// Complete Workspace Files Database
const editorFileList = {
  "Swap_Using_Pointers.c": {
    language: "C",
    color: "#A8B9CC",
    extension: "c",
    code: `// Pointer Swapping Lab Assignment
#include <stdio.h>

void swap(int *xp, int *yp) {
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

int main() {
    int x = 45, y = 99;
    printf("Before swap: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("After swap: x=%d, y=%d\\n", x, y);
    return 0;
}`,
    output: `Before swap: x=45, y=99\nAfter swap: x=99, y=45`
  },
  "Tic_Tac_Toe_Game.js": {
    language: "JavaScript",
    color: "#F7DF1E",
    extension: "js",
    code: `// Quick Tic Tac Toe Check
function checkWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const board = [
  'X', 'O', 'X',
  'O', 'X', 'O',
  'X', '', ''
];
console.log("Winner is:", checkWinner(board));`,
    output: `Winner is: X`
  },
  "Shopping_Cart_Simulation.js": {
    language: "JavaScript",
    color: "#F7DF1E",
    extension: "js",
    code: `const cart = [
  { item: "Lab Manual", price: 15.50, qty: 1 },
  { item: "Calculus Notebook", price: 6.20, qty: 3 },
  { item: "Gel Pens Pack", price: 4.80, qty: 2 }
];

let total = 0;
for (let p of cart) {
  total += p.price * p.qty;
}
console.log("Subtotal: $" + total.toFixed(2));
console.log("Grand Total (Inc. tax): $" + (total * 1.08).toFixed(2));`,
    output: `Subtotal: $43.70\nGrand Total (Inc. tax): $47.20`
  },
  "Student_Database_Demo.js": {
    language: "JavaScript",
    color: "#F7DF1E",
    extension: "js",
    code: `const students = [
  { name: "Rahul", score: 85, pass: true },
  { name: "Priya", score: 42, pass: false },
  { name: "Anish", score: 91, pass: true }
];

console.log("Passed Students:");
const passed = students.filter(s => s.pass);
for (let s of passed) {
  console.log("- " + s.name + " (" + s.score + "/100)");
}`,
    output: `Passed Students:\n- Rahul (85/100)\n- Anish (91/100)`
  },
  "StudentRecords.java": {
    language: "Java",
    color: "#007396",
    extension: "java",
    code: `// Homework File Imported from Classmate Assignment Thread
import java.util.*;

public class StudentRecords {
    public static void main(String[] args) {
        System.out.println("Processing local homework StudentRecords...");
        String student = "Akash Shinde";
        int labScore = 98;
        
        System.out.println("Student: " + student);
        System.out.println("Verified Lab Score: " + labScore + "/100");
        if (labScore >= 90) {
            System.out.println("Status: Dean's Honor Roll! 🚀");
        }
    }
}`,
    output: `Processing local homework StudentRecords...\nStudent: Akash Shinde\nVerified Lab Score: 98/100\nStatus: Dean's Honor Roll! 🚀`
  },
  "GitHub_Profile_Finder.js": {
    language: "JavaScript",
    color: "#F7DF1E",
    extension: "js",
    code: `async function fetchUser(username) {
  console.log("Simulating API fetch for:", username);
  // Offline cached sandbox profile
  return {
    login: username,
    id: 489201,
    public_repos: 35,
    bio: "CS Student & Android Tinkerer"
  };
}

fetchUser("harshal_shinde").then(profile => {
  console.log("Profile retrieved:");
  console.log("- Name:", profile.login);
  console.log("- Repos:", profile.public_repos);
  console.log("- Bio:", profile.bio);
});`,
    output: `Simulating API fetch for: harshal_shinde\nProfile retrieved:\n- Name: harshal_shinde\n- Repos: 35\n- Bio: CS Student & Android Tinkerer`
  },
  "Complete_Responsive_Website_Theme.css": {
    language: "CSS",
    color: "#1572B6",
    extension: "css",
    code: `/* Custom CSS styling framework rules */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #0B0C14;
  color: #E2E8F0;
}

.nav-link {
  color: #9497A8;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link.active, .nav-link:hover {
  color: #0EA5E9;
}`,
    output: `CSS Linting: No syntax issues detected. Responsive styles active.`
  },
  "Advanced_Grid_Dashboard.css": {
    language: "CSS",
    color: "#1572B6",
    extension: "css",
    code: `/* Dashboard Bento Grid Architecture */
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  padding: 20px;
}

.widget-card {
  background-color: #141522;
  border: 1px solid rgba(42, 47, 69, 0.5);
  border-radius: 12px;
  padding: 16px;
}`,
    output: `Grid styles loaded successfully. Auto-prefixing completed.`
  },
  "Masonry_Layout.css": {
    language: "CSS",
    color: "#1572B6",
    extension: "css",
    code: `/* Masonry Column CSS Rules */
.masonry-container {
  column-count: 3;
  column-gap: 12px;
  width: 100%;
}

.masonry-brick {
  display: inline-block;
  width: 100%;
  margin-bottom: 12px;
  break-inside: avoid;
}`,
    output: `Masonry column definitions verified on 3 breakpoint thresholds.`
  },
  "Dark_Mode_Theme.css": {
    language: "CSS",
    color: "#1572B6",
    extension: "css",
    code: `/* Deep Midnight Pure pitch-black overrides */
:root {
  --background-main: #000000;
  --card-dark: #090A0F;
  --text-primary: #FFFFFF;
  --text-muted: #64748B;
  --accent-neon: #0EA5E9;
}

body.dark-midnight-pitch {
  background-color: var(--background-main);
  color: var(--text-primary);
}`,
    output: `Midnight Black styling theme rules linked without validation warnings.`
  },
  "Complete_Portfolio_Website.html": {
    language: "HTML",
    color: "#E34F26",
    extension: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Alex Carter - CS Portfolio</title>
</head>
<body style="background:#0F172A; color:#E2E8F0; font-family:sans-serif; padding:40px;">
    <h1>Hello, I'm Alex Carter 👋</h1>
    <p>Computer Science undergrad specializing in offline Android app development.</p>
    <ul>
        <li>GitHub Repos: 32</li>
        <li>Current GPA: 3.9</li>
    </ul>
</body>
</html>`,
    output: `Local rendering server active on offline mock port 3000...\nRendering Complete_Portfolio_Website.html output.\nNo console errors detected.`
  }
};

// Labs Templates Database
const templatesData = [
  {
    id: "t1",
    title: "Employee Management System",
    desc: "Object-oriented design for database, structs, and arrays.",
    language: "C++",
    difficulty: "Advanced",
    input: "Add Employee 101, Akash, Engineer",
    output: "Employee ID 101 recorded successfully under structural registry.",
    filename: "Employee_Management_System.cpp",
    code: `// OOP Employee Management
#include <iostream>
#include <string>
#include <vector>

class Employee {
public:
    int id;
    std::string name;
    std::string role;

    Employee(int i, std::string n, std::string r) : id(i), name(n), role(r) {}
    void display() {
        std::cout << "ID: " << id << " | Name: " << name << " | Role: " << role << std::endl;
    }
};

int main() {
    std::vector<Employee> list;
    list.push_back(Employee(101, "Akash", "Software Engineer"));
    std::cout << "Employee database initialised." << std::endl;
    list[0].display();
    return 0;
}`
  },
  {
    id: "t2",
    title: "Binary Search algorithm",
    desc: "Iterative binary search array division routines.",
    language: "Java",
    difficulty: "Intermediate",
    input: "arr = [12, 24, 35, 47, 58], target = 47",
    output: "Target element 47 located at array index 3.",
    filename: "BinarySearch.java",
    code: `// Binary Search Division
public class BinarySearch {
    public static int search(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {12, 24, 35, 47, 58};
        int index = search(arr, 47);
        System.out.println("Binary Search Result index: " + index);
    }
}`
  },
  {
    id: "t3",
    title: "OOP Polymorphism",
    desc: "Parent override method polymorphism simulation.",
    language: "Python",
    difficulty: "Beginner",
    input: "Class Sound overrides",
    output: "Dog says: Woof! | Cat says: Meow!",
    filename: "Polymorphism.py",
    code: `# OOP Polymorphism Example
class Animal:
    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

pets = [Dog(), Cat()]
for p in pets:
    print(f"{p.__class__.__name__} says: {p.speak()}")`
  }
];

// Emulator State Manager
let activeTab = 'home';
let editorTabs = ["Swap_Using_Pointers.c", "Complete_Portfolio_Website.html"];
let activeEditorFile = "Swap_Using_Pointers.c";
let isRunning = false;
let isConsoleOpen = false;
let terminalOutput = "";
let searchQuery = "";
let selectedLanguageFilter = "All";
let selectedDifficultyFilter = "All";
let favorites = { "t1": true };
let expandedIO = {};
let activeTheme = "Slate Dark (Native)";
let recentFileOpen = "Swap_Using_Pointers.c";

// DOMContentLoaded Handler
document.addEventListener('DOMContentLoaded', () => {
  
  // Base Selectors
  const screens = {
    home: document.getElementById('screen-home'),
    code: document.getElementById('screen-code'),
    templates: document.getElementById('screen-templates'),
    files: document.getElementById('screen-files'),
    settings: document.getElementById('screen-settings'),
    editor: document.getElementById('screen-editor')
  };

  const navButtons = document.querySelectorAll('.nav-tab-button');
  const proOverlay = document.getElementById('pro-overlay');
  const emulatorToast = document.getElementById('emulator-toast');
  const textEditor = document.getElementById('editor-textarea');

  // --- Dynamic Toast System ---
  window.showToast = function(msg) {
    if (!emulatorToast) return;
    emulatorToast.innerHTML = `<span>👋</span> <span>${msg}</span>`;
    emulatorToast.style.display = 'flex';
    
    // Auto clear after 2.8 seconds
    if (window.toastTimeout) clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
      emulatorToast.style.display = 'none';
    }, 2800);
  };

  // --- View Switcher ---
  window.setActiveTab = function(tabName) {
    activeTab = tabName;
    
    // Update Visibility
    Object.keys(screens).forEach(key => {
      if (screens[key]) {
        screens[key].style.display = (key === tabName) ? 'flex' : 'none';
      }
    });

    // Update Bottom Nav Highlighting
    navButtons.forEach(btn => {
      const target = btn.getAttribute('data-target');
      if (target === tabName) {
        btn.classList.add('active-nav-tab');
      } else {
        btn.classList.remove('active-nav-tab');
      }
    });

    // Trigger sub-renders
    renderAllViews();
  };

  // --- Render All Subsystems ---
  function renderAllViews() {
    if (activeTab === 'home') {
      // Home setup
    } else if (activeTab === 'code') {
      renderCodeFileList();
    } else if (activeTab === 'templates') {
      renderTemplatesFilters();
      renderTemplatesCards();
    } else if (activeTab === 'files') {
      renderFilesListGrid();
    } else if (activeTab === 'settings') {
      const activeThemeLabel = document.getElementById('settings-active-theme');
      if (activeThemeLabel) activeThemeLabel.textContent = activeTheme;
    } else if (activeTab === 'editor') {
      renderEditorTabs();
      renderEditorArea();
    }
    
    // Sync "continue coding" bar filename
    const recentBarFilename = document.getElementById('code-recent-filename');
    if (recentBarFilename) {
      recentBarFilename.textContent = recentFileOpen;
    }
  }

  // --- VIEW CODE: File rows list ---
  function renderCodeFileList() {
    const listContainer = document.getElementById('code-file-list-container');
    if (!listContainer) return;
    
    listContainer.innerHTML = "";
    Object.keys(editorFileList).forEach(filename => {
      const item = editorFileList[filename];
      const isCurrentlyOpen = editorTabs.includes(filename);
      
      const fileRow = document.createElement('div');
      fileRow.className = "file-row-item";
      
      fileRow.innerHTML = `
        <div class="file-row-left">
          <span class="file-lang-dot" style="background-color: ${item.color}"></span>
          <span class="file-row-name">${filename}</span>
          ${isCurrentlyOpen ? '<span style="font-size:7px; color:#10B981; font-weight:700; margin-left:4px">OPEN</span>' : ''}
        </div>
        <button class="file-close-btn" title="Open or Switch">&rsaquo;</button>
      `;

      fileRow.addEventListener('click', (e) => {
        // Prevent close row issues
        openFileInEditor(filename);
      });

      listContainer.appendChild(fileRow);
    });
  }

  // --- VIEW TEMPLATES: Filters row and Cards ---
  function renderTemplatesFilters() {
    const langFiltersRow = document.getElementById('templates-lang-filters');
    const diffFiltersRow = document.getElementById('templates-diff-filters');
    
    if (langFiltersRow) {
      const langs = ["All", "Python", "Java", "C++"];
      langFiltersRow.innerHTML = "";
      langs.forEach(lang => {
        const btn = document.createElement('button');
        btn.className = `filter-pill-button ${selectedLanguageFilter === lang ? 'pill-selected-blue' : 'pill-unselected-grey'}`;
        btn.textContent = lang;
        btn.addEventListener('click', () => {
          selectedLanguageFilter = lang;
          renderTemplatesFilters();
          renderTemplatesCards();
        });
        langFiltersRow.appendChild(btn);
      });
    }

    if (diffFiltersRow) {
      const diffs = ["All", "Beginner", "Intermediate", "Advanced"];
      diffFiltersRow.innerHTML = "";
      diffs.forEach(diff => {
        const btn = document.createElement('button');
        btn.className = `filter-pill-button ${selectedDifficultyFilter === diff ? 'pill-selected-glow-blue' : 'pill-unselected-grey'}`;
        btn.textContent = diff;
        btn.addEventListener('click', () => {
          selectedDifficultyFilter = diff;
          renderTemplatesFilters();
          renderTemplatesCards();
        });
        diffFiltersRow.appendChild(btn);
      });
    }
  }

  function renderTemplatesCards() {
    const cardsContainer = document.getElementById('templates-cards-container');
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = "";
    
    const filteredTemplates = templatesData.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLang = (selectedLanguageFilter === "All") || (item.language === selectedLanguageFilter);
      const matchesDiff = (selectedDifficultyFilter === "All") || (item.difficulty === selectedDifficultyFilter);
      return matchesSearch && matchesLang && matchesDiff;
    });

    if (filteredTemplates.length === 0) {
      cardsContainer.innerHTML = `<div style="text-align:center; padding:20px; font-size:9px; color:var(--text-gray)">No matching templates found</div>`;
      return;
    }

    filteredTemplates.forEach(t => {
      const isFavorited = !!favorites[t.id];
      const isExpanded = !!expandedIO[t.id];
      
      const card = document.createElement('div');
      card.className = "template-card";
      
      card.innerHTML = `
        <div class="template-card-header">
          <div class="template-tags-box">
            <span class="template-lang-badge">${t.language}</span>
            <span class="template-diff-badge">${t.difficulty}</span>
          </div>
          <button class="template-star-fav ${isFavorited ? 'favorited' : ''}">
            ${isFavorited ? '★' : '☆'}
          </button>
        </div>
        
        <div class="template-title">${t.title}</div>
        <div class="template-desc">${t.desc}</div>
        
        <button class="template-collapsible-trigger">
          <span>Expected I/O Parameters</span>
          <span>${isExpanded ? '▲' : '▼'}</span>
        </button>
        
        ${isExpanded ? `
          <div class="template-collapsible-panel">
            <div><strong>Input:</strong> ${t.input}</div>
            <div><strong>Expected Output:</strong> ${t.output}</div>
          </div>
        ` : ''}
        
        <div class="template-actions-row">
          <button class="template-action-btn-primary select-tpl-run">Open Lab</button>
          <button class="template-action-btn-secondary select-tpl-copy">Copy Code</button>
        </div>
      `;

      // Favorite toggle handler
      card.querySelector('.template-star-fav').addEventListener('click', (e) => {
        e.stopPropagation();
        favorites[t.id] = !favorites[t.id];
        showToast(favorites[t.id] ? "Saved template to favorites" : "Removed template from favorites");
        renderTemplatesCards();
      });

      // Expand collapsible I/O parameters handler
      card.querySelector('.template-collapsible-trigger').addEventListener('click', (e) => {
        e.stopPropagation();
        expandedIO[t.id] = !expandedIO[t.id];
        renderTemplatesCards();
      });

      // Copy template code handler
      card.querySelector('.select-tpl-copy').addEventListener('click', (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(t.code);
        showToast("Copied boilerplate code to clipboard!");
      });

      // Open Lab in active workspace handler
      card.querySelector('.select-tpl-run').addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Inject template file into active workspace dynamically
        if (!editorFileList[t.filename]) {
          editorFileList[t.filename] = {
            language: t.language,
            color: t.language === "C++" ? "#F34B7D" : (t.language === "Java" ? "#007396" : "#3572A5"),
            extension: t.filename.split('.').pop(),
            code: t.code,
            output: t.output
          };
        }
        
        openFileInEditor(t.filename);
      });

      cardsContainer.appendChild(card);
    });
  }

  // --- VIEW FILES: All list grid ---
  function renderFilesListGrid() {
    const gridContainer = document.getElementById('files-list-container');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = "";
    Object.keys(editorFileList).forEach(filename => {
      const item = editorFileList[filename];
      
      const fileCard = document.createElement('div');
      fileCard.className = "file-grid-item";
      
      fileCard.innerHTML = `
        <div class="file-item-icon-box" style="color: ${item.color}">📄</div>
        <div class="file-item-info-text">
          <span class="file-item-title">${filename}</span>
          <span class="file-item-subtitle">${item.language} Script file</span>
        </div>
      `;

      fileCard.addEventListener('click', () => {
        openFileInEditor(filename);
      });

      gridContainer.appendChild(fileCard);
    });

    // Simulated locked files
    for (let i = 1; i <= 4; i++) {
      const lockedRow = document.createElement('div');
      lockedRow.className = "file-grid-item";
      lockedRow.style.opacity = "0.5";
      lockedRow.style.cursor = "not-allowed";
      lockedRow.innerHTML = `
        <div class="file-item-icon-box" style="color: #64748B">🔒</div>
        <div class="file-item-info-text">
          <span class="file-item-title">lab_experiment_pro_0${i}.cpp</span>
          <span class="file-item-subtitle">C++ Header (Pro Exclusive)</span>
        </div>
      `;
      lockedRow.addEventListener('click', () => {
        showProOverlayPopup();
      });
      gridContainer.appendChild(lockedRow);
    }
  }

  // --- VIEW EDITOR: Tab strip and area text ---
  function renderEditorTabs() {
    const tabsStrip = document.getElementById('editor-tab-headers');
    if (!tabsStrip) return;
    
    tabsStrip.innerHTML = "";
    editorTabs.forEach(tab => {
      const isActive = (tab === activeEditorFile);
      const item = editorFileList[tab];
      if (!item) return;

      const tabHeader = document.createElement('div');
      tabHeader.className = `editor-tab-header-item ${isActive ? 'editor-tab-selected' : 'editor-tab-unselected'}`;
      
      tabHeader.innerHTML = `
        <span style="color: ${item.color}; font-size:7px">●</span>
        <span>${tab}</span>
        <button class="tab-mini-close-btn">&times;</button>
      `;

      // Select active tab click
      tabHeader.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-mini-close-btn')) return;
        activeEditorFile = tab;
        recentFileOpen = tab;
        renderAllViews();
      });

      // Close mini tab click
      tabHeader.querySelector('.tab-mini-close-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        closeEditorTab(tab);
      });

      tabsStrip.appendChild(tabHeader);
    });
  }

  function renderEditorArea() {
    if (!textEditor) return;
    
    const activeFileDetail = editorFileList[activeEditorFile];
    if (activeFileDetail) {
      textEditor.value = activeFileDetail.code;
      
      const modeLabel = document.getElementById('editor-mode-label');
      if (modeLabel) {
        modeLabel.textContent = `${activeFileDetail.language.toUpperCase()} MODE`;
      }
    }

    // Sync console sheet logs height and chevrons
    const terminalSheet = document.getElementById('terminal-sheet');
    const chevronIcon = document.getElementById('terminal-chevron-icon');
    const logsPane = document.getElementById('terminal-log-pane');

    if (terminalSheet) {
      if (isConsoleOpen) {
        terminalSheet.className = "terminal-drawer-sheet terminal-sheet-expanded";
        if (chevronIcon) chevronIcon.textContent = "▼";
        
        if (logsPane) {
          if (terminalOutput) {
            logsPane.innerHTML = `<pre>${terminalOutput}</pre>`;
          } else {
            logsPane.innerHTML = `
              <div class="terminal-placeholder-state">
                <span style="font-size:14px; margin-bottom:4px">✔</span>
                <p style="font-size:7.5px">Tap the floating Play button to execute local diagnostic sandboxed compiles.</p>
              </div>
            `;
          }
        }
      } else {
        terminalSheet.className = "terminal-drawer-sheet terminal-sheet-collapsed";
        if (chevronIcon) chevronIcon.textContent = "▲";
        if (logsPane) logsPane.innerHTML = "";
      }
    }

    // Sync Play button states
    const playBtn = document.getElementById('editor-play-fab');
    if (playBtn) {
      playBtn.disabled = isRunning;
    }
  }

  // --- CORE SYSTEM WORKSPACE ACTIONS ---
  window.openFileInEditor = function(filename) {
    if (!editorFileList[filename]) return;

    // Check if tab already present, if not add it
    if (!editorTabs.includes(filename)) {
      editorTabs.push(filename);
    }
    
    activeEditorFile = filename;
    recentFileOpen = filename;
    setActiveTab('editor');
  };

  function closeEditorTab(filename) {
    const index = editorTabs.indexOf(filename);
    if (index === -1) return;
    
    editorTabs.splice(index, 1);
    
    // If no tabs left, fall back to default
    if (editorTabs.length === 0) {
      editorTabs = ["Swap_Using_Pointers.c"];
      activeEditorFile = "Swap_Using_Pointers.c";
    } else if (activeEditorFile === filename) {
      activeEditorFile = editorTabs[Math.max(0, index - 1)];
    }

    recentFileOpen = activeEditorFile;
    renderAllViews();
  }

  // --- COMPILER SIMULATOR RUN PIPELINE ---
  window.handleCompileCode = function() {
    if (isRunning) return;
    isRunning = true;
    isConsoleOpen = true; // Slide open terminal sheet immediately
    terminalOutput = "";
    
    const activeFileDetail = editorFileList[activeEditorFile];
    if (!activeFileDetail) {
      isRunning = false;
      return;
    }

    renderAllViews();

    // Step 1: Init logs
    terminalOutput += `<span style="color:#38BDF8;">$ offline-compiler run ${activeEditorFile}</span>\n[INIT] Booting isolated native sandbox process...\n`;
    renderAllViews();

    // Step 2: Load signatures
    setTimeout(() => {
      terminalOutput += `[LOAD] Linking local header signatures and educational packages...\n`;
      renderAllViews();
    }, 400);

    // Step 3: Run execution
    setTimeout(() => {
      terminalOutput += `[RUN] Local binary execution started on device CPU...\n\n`;
      renderAllViews();
    }, 850);

    // Step 4: Out logs
    setTimeout(() => {
      terminalOutput += `<span style="color:#10B981;">${activeFileDetail.output}</span>\n\n<span style="color:#10B981; font-weight:bold;">Process exited successfully (0)</span>`;
      isRunning = false;
      renderAllViews();
      showToast(`Finished compiling '${activeEditorFile}' offline!`);
    }, 1400);
  };

  // --- KEYBOARD SYMBOL BAR SHORTCUTS ---
  const symbolButtons = document.querySelectorAll('#editor-keyboard-belt .belt-key-btn');
  symbolButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!textEditor) return;
      const char = btn.getAttribute('data-char');
      
      const start = textEditor.selectionStart;
      const end = textEditor.selectionEnd;
      const originalText = textEditor.value;
      
      textEditor.value = originalText.substring(0, start) + char + originalText.substring(end);
      
      // Keep textarea focused and position cursor right after the inserted symbol
      textEditor.focus();
      const newCursorPos = start + char.length;
      textEditor.setSelectionRange(newCursorPos, newCursorPos);
      
      // Save to virtual db in real-time
      if (editorFileList[activeEditorFile]) {
        editorFileList[activeEditorFile].code = textEditor.value;
      }
    });
  });

  // Track manual text area modifications
  if (textEditor) {
    textEditor.addEventListener('input', () => {
      if (editorFileList[activeEditorFile]) {
        editorFileList[activeEditorFile].code = textEditor.value;
      }
    });
  }

  // --- THEME SELECT TRIGGER ---
  const themeTrigger = document.getElementById('settings-theme-select');
  if (themeTrigger) {
    themeTrigger.addEventListener('click', () => {
      activeTheme = activeTheme.includes('Slate') ? "Midnight Pitch Black" : "Slate Dark (Native)";
      showToast(`Applied theme selection: ${activeTheme}`);
      renderAllViews();
    });
  }

  // --- PRO PREMIUM OVERLAY MODALS ---
  window.showProOverlayPopup = function() {
    if (proOverlay) proOverlay.style.display = 'flex';
  };

  window.hideProOverlayPopup = function() {
    if (proOverlay) proOverlay.style.display = 'none';
  };

  const proTriggers = document.querySelectorAll('.pro-overlay-trigger');
  proTriggers.forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      showProOverlayPopup();
    });
  });

  const proBuyBtn = document.getElementById('pro-buy-btn');
  if (proBuyBtn) {
    proBuyBtn.addEventListener('click', () => {
      hideProOverlayPopup();
      showToast("Thank you for supporting offline CS education! Premium activated.");
    });
  }

  const proDismissBtn = document.getElementById('pro-dismiss-btn');
  if (proDismissBtn) {
    proDismissBtn.addEventListener('click', () => {
      hideProOverlayPopup();
    });
  }

  // --- WHATSAPP HOMEWORK INTERACTION CLICK ---
  const whatsappBtn = document.getElementById('whatsapp-trigger-btn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      // 1. Instantly focus file
      openFileInEditor("StudentRecords.java");
      showToast("Opened 'StudentRecords.java' from WhatsApp instantly!");
      
      // 2. Queue compilation automatically after 1 second for a magical experience
      setTimeout(() => {
        handleCompileCode();
      }, 1000);
    });
  }

  // --- SEARCH TEMPLATE KEYUPS ---
  const searchInput = document.getElementById('templates-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderTemplatesCards();
    });
  }

  // --- SYSTEM BUTTON CLICKS ---
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      setActiveTab(target);
    });
  });

  // Home actions triggers
  const homeCreateProj = document.getElementById('home-create-project');
  if (homeCreateProj) {
    homeCreateProj.addEventListener('click', () => {
      showToast("Create project folder (Pro Version Exclusive)");
      showProOverlayPopup();
    });
  }

  const homeNavFiles = document.getElementById('home-nav-files');
  if (homeNavFiles) homeNavFiles.addEventListener('click', () => setActiveTab('files'));

  const homeNavTemplates = document.getElementById('home-nav-templates');
  if (homeNavTemplates) homeNavTemplates.addEventListener('click', () => setActiveTab('templates'));

  const guideTrigger = document.getElementById('home-guide-trigger');
  if (guideTrigger) {
    guideTrigger.addEventListener('click', () => {
      showToast("Guide book loaded: offline pointers standard reference docs!");
    });
  }

  const homeMoreFiles = document.getElementById('home-more-files-trigger');
  if (homeMoreFiles) homeMoreFiles.addEventListener('click', () => setActiveTab('files'));

  const homeResume = document.getElementById('home-resume-workspace');
  if (homeResume) {
    homeResume.addEventListener('click', () => {
      openFileInEditor(recentFileOpen);
    });
  }

  // Code actions triggers
  const codeOpenWorkspace = document.getElementById('code-open-workspace');
  if (codeOpenWorkspace) {
    codeOpenWorkspace.addEventListener('click', () => {
      openFileInEditor(recentFileOpen);
    });
  }

  const codeNewFileBtn = document.getElementById('code-new-file');
  if (codeNewFileBtn) {
    codeNewFileBtn.addEventListener('click', () => {
      showToast("New file action (Unlock Pro for custom directories)");
      showProOverlayPopup();
    });
  }

  const codeOpenFileBtn = document.getElementById('code-open-file');
  if (codeOpenFileBtn) {
    codeOpenFileBtn.addEventListener('click', () => {
      setActiveTab('files');
    });
  }

  const codeCloseInactive = document.getElementById('code-close-inactive');
  if (codeCloseInactive) {
    codeCloseInactive.addEventListener('click', () => {
      editorTabs = [activeEditorFile];
      showToast("Closed inactive background files!");
      renderAllViews();
    });
  }

  // Editor actions triggers
  const editorBackButton = document.getElementById('editor-back-button');
  if (editorBackButton) {
    editorBackButton.addEventListener('click', () => {
      setActiveTab('home');
    });
  }

  const editorAddTab = document.getElementById('editor-add-tab');
  if (editorAddTab) {
    editorAddTab.addEventListener('click', () => {
      showToast("New tab limit: Upgrade to Pro for multi-file configurations");
      showProOverlayPopup();
    });
  }

  const editorPreview = document.getElementById('editor-preview-webview');
  if (editorPreview) {
    editorPreview.addEventListener('click', () => {
      showToast("Simulated Live Webview active! Zero console issues detected.");
      isConsoleOpen = true;
      terminalOutput = "[Vite Server] Rendered local Webview.\nNo console issues detected.";
      renderAllViews();
    });
  }

  const editorDotsDiag = document.getElementById('editor-dots-diagnostic');
  if (editorDotsDiag) {
    editorDotsDiag.addEventListener('click', () => {
      showToast("Diagnostic options: clean cache, export project, optimize binaries");
    });
  }

  const playFab = document.getElementById('editor-play-fab');
  if (playFab) {
    playFab.addEventListener('click', () => {
      handleCompileCode();
    });
  }

  // Slidable terminal header click toggle
  const terminalHeader = document.getElementById('terminal-header-toggle');
  if (terminalHeader) {
    terminalHeader.addEventListener('click', () => {
      isConsoleOpen = !isConsoleOpen;
      renderAllViews();
    });
  }

  // --- ANDROID SOFT SYSTEM NAVIGATION KEYS ---
  const softBack = document.getElementById('softkey-back');
  if (softBack) {
    softBack.addEventListener('click', () => {
      if (activeTab === 'editor') {
        setActiveTab('home');
      } else if (activeTab !== 'home') {
        setActiveTab('home');
      } else {
        showToast("Exiting App Emulator (Simulated)");
      }
    });
  }

  const softHome = document.getElementById('softkey-home');
  if (softHome) {
    softHome.addEventListener('click', () => {
      setActiveTab('home');
    });
  }

  const softRecents = document.getElementById('softkey-recents');
  if (softRecents) {
    softRecents.addEventListener('click', () => {
      showToast("Android Recents App list is empty");
    });
  }

  // --- TRIGGER BOOTSTRAP INITIAL ACTIVE TAB ---
  setActiveTab('home');
});
