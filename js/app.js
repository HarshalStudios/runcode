/* 
  RunCode IDE - Compiler Simulator Engine
  Empowers interactive language tabs, simulated offline compiling pipelines, and terminal outputs.
*/

const languageTemplates = {
  python: {
    extension: 'main.py',
    code: `# Student Grade Analytics\ngrades = [88, 92, 79, 95, 84]\naverage = sum(grades) / len(grades)\n\nprint("--- Grade Report ---")\nprint(f"Class Average: {average:.2f}")\nprint("Status: All students passed! 🚀")`,
    output: `--- Grade Report ---\nClass Average: 87.60\nStatus: All students passed! 🚀`
  },
  java: {
    extension: 'Main.java',
    code: `// Java Algorithm Example\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Compiling standard workspace...");\n        int result = fibonacci(6);\n        System.out.println("Fibonacci(6) result is: " + result);\n    }\n    \n    private static int fibonacci(int n) {\n        if (n <= 1) return n;\n        return fibonacci(n-1) + fibonacci(n-2);\n    }\n}`,
    output: `Compiling standard workspace...\nFibonacci(6) result is: 8`
  },
  cpp: {
    extension: 'main.cpp',
    code: `// C++ Container Operations\n#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> scores = {98, 85, 91};\n    int total = std::accumulate(scores.begin(), scores.end(), 0);\n    \n    std::cout << "Successfully linked C++ libraries." << std::endl;\n    std::cout << "Sum total: " << total << std::endl;\n    return 0;\n}`,
    output: `Successfully linked C++ libraries.\nSum total: 274`
  },
  javascript: {
    extension: 'index.js',
    code: `// Modern JS Array Operations\nconst users = [\n  { name: "Alex", active: true },\n  { name: "Sam", active: false },\n  { name: "Taylor", active: true }\n];\n\nconst activeUsers = users.filter(u => u.active);\nconsole.log("Active users count:", activeUsers.length);\nconsole.log("Current session live users:", activeUsers.map(u => u.name));`,
    output: `Active users count: 2\nCurrent session live users: [ 'Alex', 'Taylor' ]`
  }
};

let selectedLanguage = 'python';
let isCompiling = false;

document.addEventListener('DOMContentLoaded', () => {
  const codeEditor = document.getElementById('static-code-editor');
  const terminalConsole = document.getElementById('static-terminal-console');
  const runBtn = document.getElementById('static-run-btn');
  const resetBtn = document.getElementById('static-reset-btn');
  const fileLabel = document.getElementById('static-file-label');
  const langTabs = document.querySelectorAll('.static-lang-tab');
  const cursorStats = document.querySelector('.editor-footer span');

  if (!codeEditor) return; // Safeguard if loaded on pages without code simulator

  // Update real-time line and column index counters
  const updateCursorStats = () => {
    const text = codeEditor.value;
    const selectionStart = codeEditor.selectionStart;
    const lines = text.substring(0, selectionStart).split('\n');
    const lineNum = lines.length;
    const colNum = lines[lines.length - 1].length + 1;
    if (cursorStats) {
      cursorStats.textContent = `Line ${lineNum}, Col ${colNum} · UTF-8`;
    }
  };

  codeEditor.addEventListener('keyup', updateCursorStats);
  codeEditor.addEventListener('click', updateCursorStats);
  codeEditor.addEventListener('input', updateCursorStats);

  // Initialize selected language template
  const initTemplate = (lang) => {
    selectedLanguage = lang;
    codeEditor.value = languageTemplates[lang].code;
    fileLabel.innerText = languageTemplates[lang].extension;
    terminalConsole.innerHTML = `<span style="color:rgba(148, 151, 168, 0.4);">Click "Run Code" to execute compiling pipeline...</span>`;
    updateCursorStats();
  };

  // Wire Tab Selectors
  langTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (isCompiling) return;
      langTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      initTemplate(tab.dataset.lang);
    });
  });

  // Simulated Offline Compilation Thread
  runBtn.addEventListener('click', () => {
    if (isCompiling) return;
    isCompiling = true;
    
    runBtn.innerText = 'Compiling...';
    runBtn.style.opacity = '0.7';
    runBtn.classList.add('pulse-indicator');

    terminalConsole.innerHTML = `<span style="color:#38BDF8;">$ offline-compiler run ${languageTemplates[selectedLanguage].extension}</span>\n[INIT] Initializing local offline sandboxed process...\n`;
    
    setTimeout(() => {
      terminalConsole.innerHTML += `[LOAD] Linking necessary libraries and runtime environments...\n`;
    }, 300);

    setTimeout(() => {
      terminalConsole.innerHTML += `[RUN] Direct execution started on device CPU...\n\n`;
    }, 700);

    setTimeout(() => {
      terminalConsole.innerHTML += `<span style="color:#10B981;">${languageTemplates[selectedLanguage].output}</span>\n\n<span style="color:#10B981;font-weight:bold;">Process exited successfully (0)</span>`;
      isCompiling = false;
      runBtn.innerText = 'Run Code';
      runBtn.style.opacity = '1';
      runBtn.classList.remove('pulse-indicator');
    }, 1100);
  });

  // Wire Reset Action
  resetBtn.addEventListener('click', () => {
    if (isCompiling) return;
    initTemplate(selectedLanguage);
  });

  // Default activation
  initTemplate('python');
});
