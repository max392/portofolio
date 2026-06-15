// DATA STRUCTURE ARCHITECTURE
const profileData = {
    header: {
        name: "SACHIN KUMAR",
        role: "MIS EXECUTIVE",
        location: "Noida, Uttar Pradesh",
        phone: "+91 8755617167",
        email: "sachinkashyaps2002@gmail.com",
        summary: "Detail-oriented and analytical MIS Executive with a strong foundation in managing large-scale data systems, generating business reports, and ensuring high-level data integrity. Adept at transforming raw data into structured, actionable insights using advanced spreadsheet functions, database tools, and normalization techniques. Highly skilled in automating reporting workflows, designing interactive summaries, and supporting strategic decision-making with precise data analysis."
    },
    competencies: [
        "Advanced Excel (XLOOKUP, HLOOKUP, Pivot Tables, Data Validation, Power Query)",
        "Daily/Weekly/Monthly MIS Report Generation",
        "Trend Analysis & Dashboard Creation",
        "DBMS Architecture & Relational Databases",
        "Database Normalization & Basic SQL Queries",
        "Analytical Thinking & Data Accuracy",
        "Cross-Functional Communication"
    ],
    experience: {
        role: "MIS EXECUTIVE",
        company: "PRAKASH BOOKS INDIA PVT. LTD | NOIDA",
        duration: "December 2025 – June 2026 (6 Months)",
        points: [
            "Managed, cleaned, and organized high-volume inventory, sales, and distribution data files using Advanced Excel functions (XLOOKUP, HLOOKUP, and complex formulas).",
            "Developed and automated daily, weekly, and monthly MIS reports for senior management to track sales performance and inventory turnover.",
            "Utilized Pivot Tables and data visualization tools to transform raw transactional data into structured, scannable summaries, reducing reporting errors by 15%.",
            "Maintained data integrity by conducting routine database normalization checks, minimizing redundancies, and resolving data discrepancies across systems.",
            "Collaborated closely with the operations and logistics teams to gather reporting requirements and deliver ad-hoc data analysis under tight deadlines."
        ]
    },
    technicalSkills: [
        { category: "Applications & Tools", items: "Microsoft Excel, Word, PowerPoint, Google Sheets" },
        { category: "Database Fundamentals", items: "Database Management Systems (DBMS), Data Normalization" },
        { category: "Programming & Automation", items: "Foundation in Python, JavaScript (useful for data manipulation and automation)" },
        { category: "Operating Systems", items: "Windows 10/11, Windows Server" }
    ],
    education: [
        { degree: "MASTER OF COMPUTER APPLICATION (MCA)", institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)", year: "Graduation Year: 2025" },
        { degree: "BACHELOR OF SCIENCE / COMPUTER SCIENCE", institution: "MAHATMA JYOTIBA PHULE ROHILKHAND UNIVERSITY (MJPRU)", year: "Graduation year: 2023" }
    ],
    personal: {
        father: "Baburam",
        mother: "Sarveish devi",
        dob: "01-08-2002",
        languages: "English, Hindi"
    }
};

// MOUNTING ENGINE LOGIC
const engine = document.getElementById('portfolio-engine');

engine.innerHTML = `
    <div class="fixed -top-24 -right-24 w-96 h-96 border-4 border-dashed border-earthDark/5 rounded-full pointer-events-none animate-chakra-cw flex items-center justify-center z-0">
        <div class="w-80 h-80 border-2 border-double border-terracotta/10 rounded-full flex items-center justify-center">
            <div class="w-48 h-48 border border-dashed border-templeGold/20 rounded-full rotate-45"></div>
        </div>
    </div>
    
    <div class="fixed top-1/2 -left-32 w-80 h-80 border-2 border-dashed border-terracotta/5 rounded-full pointer-events-none animate-chakra-ccw z-0">
        <div class="w-64 h-64 border border-earthDark/5 rounded-full transform rotate-12"></div>
    </div>

    <div class="max-w-5xl mx-auto px-6 py-12 relative z-10">
        
        <header class="border-b-2 border-earthDark/20 pb-10 mb-16 relative carved-border">
            <div class="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-terracotta via-templeGold to-terracotta opacity-90"></div>
            
            <div class="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-6">
                <div>
                    <span class="text-xs font-mono uppercase tracking-widest text-terracotta font-bold">|| SCRIPT MEMORANDUM ||</span>
                    <h1 class="text-5xl font-serif font-bold tracking-tight text-earthDark mt-2">
                        ${profileData.header.name}
                    </h1>
                    <p class="text-md text-terracotta font-mono tracking-widest mt-1 font-semibold">${profileData.header.role}</p>
                    <p class="text-xs text-earthDark/60 font-mono mt-2 flex items-center gap-2">
                        <span>🏛 ${profileData.header.location}</span>
                    </p>
                </div>
                
                <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto font-mono text-xs">
                    <a href="mailto:${profileData.header.email}" class="mechanical-lever px-4 py-2.5 border-2 border-earthDark text-earthDark bg-transparent text-center font-bold tracking-wider">
                        ${profileData.header.email} ✉
                    </a>
                    <a href="tel:${profileData.header.phone}" class="mechanical-lever px-4 py-2.5 border border-earthDark/40 text-earthDark/80 text-center tracking-wider">
                        ${profileData.header.phone} 📱
                    </a>
                </div>
            </div>
            
            <div class="mt-8 border-l-4 border-terracotta pl-4 bg-earthDark/[0.02] py-4 pr-2 rounded-r-md">
                <p class="text-md text-earthDark/80 leading-relaxed italic font-serif">
                    "${profileData.header.summary}"
                </p>
            </div>
        </header>

        <main class="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div class="md:col-span-1 space-y-12">
                
                <section class="space-y-4">
                    <div class="flex items-center gap-2.5">
                        <div class="w-3.5 h-3.5 bg-terracotta rotate-45 border border-templeGold"></div>
                        <h2 class="text-md font-mono uppercase tracking-widest text-earthDark font-bold">Data Directives</h2>
                    </div>
                    <ul class="space-y-2 font-mono text-xs text-earthDark/80">
                        ${profileData.competencies.map(comp => `
                            <li class="flex items-start gap-2 bg-earthDark/[0.02] p-2.5 border border-earthDark/10 rounded">
                                <span class="text-terracotta">☸</span>
                                <span>${comp}</span>
                            </li>
                        `).join('')}
                    </ul>
                </section>

                <section class="space-y-4">
                    <div class="flex items-center gap-2.5">
                        <div class="w-3.5 h-3.5 bg-templeGold rotate-45 border border-earthDark/50"></div>
                        <h2 class="text-md font-mono uppercase tracking-widest text-earthDark font-bold">Technological Pillars</h2>
                    </div>
                    <div class="space-y-4">
                        ${profileData.technicalSkills.map(skill => `
                            <div class="border-b border-earthDark/10 pb-2">
                                <h4 class="text-xs font-mono uppercase text-terracotta font-bold">${skill.category}</h4>
                                <p class="text-sm text-earthDark/80 mt-1 font-serif">${skill.items}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>

            <div class="md:col-span-2 space-y-12">
                
                <section class="space-y-6">
                    <div class="flex items-center gap-2.5">
                        <div class="w-3.5 h-3.5 bg-terracotta rotate-45 border border-templeGold"></div>
                        <h2 class="text-md font-mono uppercase tracking-widest text-earthDark font-bold">Chronicles of Duty</h2>
                    </div>

                    <div class="border-2 border-earthDark/20 bg-earthDark/[0.01] p-6 relative overflow-hidden group hover:border-terracotta/40 transition-all rounded">
                        <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-earthDark/30 group-hover:border-terracotta transition-colors"></div>
                        <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-earthDark/30 group-hover:border-terracotta transition-colors"></div>
                        
                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                            <div>
                                <h3 class="text-xl font-bold font-serif text-earthDark group-hover:text-terracotta transition-colors">${profileData.experience.role}</h3>
                                <p class="text-xs font-mono uppercase tracking-wider text-terracotta font-bold mt-0.5">${profileData.experience.company}</p>
                            </div>
                            <span class="text-xs font-mono bg-earthDark/5 px-2.5 py-1 border border-earthDark/10 text-earthDark font-semibold rounded whitespace-nowrap">
                                ${profileData.experience.duration}
                            </span>
                        </div>
                        
                        <ul class="space-y-3 text-sm text-earthDark/80 list-none pl-1 font-serif">
                            ${profileData.experience.points.map(pt => `
                                <li class="flex items-start gap-2.5 leading-relaxed">
                                    <span class="text-terracotta mt-1.5 text-[8px]">⬥</span>
                                    <span>${pt}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </section>

                <section class="space-y-6">
                    <div class="flex items-center gap-2.5">
                        <div class="w-3.5 h-3.5 bg-templeGold rotate-45 border border-earthDark/40"></div>
                        <h2 class="text-md font-mono uppercase tracking-widest text-earthDark font-bold">Academic Base</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${profileData.education.map(edu => `
                            <div class="border border-earthDark/10 bg-earthDark/[0.02] p-4 flex flex-col justify-between rounded">
                                <div>
                                    <h4 class="text-sm font-bold text-earthDark font-serif">${edu.degree}</h4>
                                    <p class="text-xs text-earthDark/60 mt-2 font-mono">${edu.institution}</p>
                                </div>
                                <span class="text-[11px] font-mono text-terracotta font-bold mt-4 block">${edu.year}</span>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="space-y-4">
                    <div class="flex items-center gap-2.5">
                        <div class="w-3.5 h-3.5 bg-terracotta rotate-45 border border-templeGold"></div>
                        <h2 class="text-md font-mono uppercase tracking-widest text-earthDark font-bold">Registry Ledger</h2>
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-earthDark/[0.02] border border-earthDark/10 p-4 font-mono text-[11px]">
                        <div>
                            <span class="text-terracotta block font-bold">Father Name:</span>
                            <span class="text-earthDark/80 font-serif font-bold">${profileData.personal.father}</span>
                        </div>
                        <div>
                            <span class="text-terracotta block font-bold">Mother Name:</span>
                            <span class="text-earthDark/80 font-serif font-bold">${profileData.personal.mother}</span>
                        </div>
                        <div>
                            <span class="text-terracotta block font-bold">Solar Orbit Day (DOB):</span>
                            <span class="text-earthDark/80 font-bold">${profileData.personal.dob}</span>
                        </div>
                        <div>
                            <span class="text-terracotta block font-bold">Dialect Fluency:</span>
                            <span class="text-earthDark/80 font-serif font-bold">${profileData.personal.languages}</span>
                        </div>
                    </div>
                </section>

            </div>
        </main>

        <footer class="mt-20 pt-6 border-t border-earthDark/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-earthDark/40">
            <p>© 2026 ${profileData.header.name}. Preserving transactional logs elegantly.</p>
            <p class="text-terracotta tracking-wider font-semibold">|| Operational Stability Intact ||</p>
        </footer>
    </div>
`;