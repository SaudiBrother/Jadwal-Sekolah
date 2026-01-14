index.html:

<!DOCTYPE html>

<html lang="id">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Jadwal Pelajaran SMP Negeri 2 Bitung</title>

    <link rel="stylesheet" href="css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

</head>

<body class="light-mode">

    <!-- Tombol Toggle Tema -->

    <button class="theme-toggle" id="themeToggle" aria-label="Ganti tema">

        <div class="sun-moon">

            <div class="sun"></div>

            <div class="moon"></div>

        </div>

    </button>


<!-- Tombol Kembali Fixed -->
<button class="back-fixed" id="fixedBackButton" aria-label="Kembali">
    <i class="fas fa-arrow-left"></i> Kembali
</button>



    <!-- Kontainer Utama untuk semua tampilan -->

    <div class="container" id="mainContainer">

        <!-- Tampilan Menu Utama -->

        <div class="screen active" id="mainMenu">

            <div class="title-container">

                <h1 class="main-title floating-main">

                    <i class="fas fa-calendar-alt"></i> Jadwal Pelajaran

                </h1>

                <h2 class="subtitle-main">SMP Negeri 2 Bitung</h2>

                <h3 class="current-date" id="currentDate">2026, Kamis, 8 Januari</h3>

            </div>

            

            <div class="class-selection">

                <h3 class="selection-title">Pilih Kelas</h3>

                <div class="class-buttons">

                    <button class="class-btn" data-class="7" style="--color: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">

                        <span class="class-number">VII</span>

                        <span class="class-label">Kelas 7</span>

                    </button>

                    <button class="class-btn" data-class="8" style="--color:  linear-gradient(135deg, #f093fb 0%, #f5576c 100%)">

                        <span class="class-number">VIII</span>

                        <span class="class-label">Kelas 8</span>

                    </button>

                    <button class="class-btn" data-class="9" style="--color: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">

                        <span class="class-number">IX</span>

                        <span class="class-label">Kelas 9</span>

                    </button>

                </div>

            </div>

            

            <button class="fun-facts-btn" id="funFactsBtn">

                <i class="fas fa-lightbulb"></i> Fun Facts Sekolah

            </button>

        </div>

        

        <!-- Tampilan Pemilihan Rombel -->

        <div class="screen" id="rombelSelection">

            <h1 class="section-title" id="dayTitle">Pilih Kelas</h1>

            <div class="rombel-grid" id="rombelGrid">

                <!-- Rombel akan dimasukkan melalui JavaScript -->

            </div>

        </div>

        

        <!-- Tampilan Pemilihan Hari -->

        <div class="screen" id="daySelection">

            <h1 class="section-title" id="dayTitle"></h1>

            <div class="day-grid">

                <button class="day-btn" data-day="SENIN">

                    <i class="fas fa-sun"></i> Senin

                </button>

                <button class="day-btn" data-day="SELASA">

                    <i class="fas fa-cloud"></i> Selasa

                </button>

                <button class="day-btn" data-day="RABU">

                    <i class="fas fa-cloud-sun"></i> Rabu

                </button>

                <button class="day-btn" data-day="KAMIS">

                    <i class="fas fa-cloud-rain"></i> Kamis

                </button>

                <button class="day-btn" data-day="JUMAT">

                    <i class="fas fa-star"></i> Jumat

                </button>

            </div>

        </div>

        

        <!-- Tampilan Jadwal -->

        <div class="screen" id="scheduleDisplay">

            <h1 class="section-title" id="scheduleTitle"></h1>

            <div class="schedule-container">

                <div class="schedule-header">

                    <div class="header-time"><i class="fas fa-clock"></i> Waktu</div>

                    <div class="header-subject"><i class="fas fa-book"></i> Mata Pelajaran</div>

                </div>

                <div class="schedule-list" id="scheduleList">

                    <!-- Jadwal akan dimasukkan melalui JavaScript -->

                </div>

            </div>

        </div>

        

        <!-- Tampilan Fun Facts -->

        <div class="screen" id="funFactsDisplay">

            <h1 class="section-title">

                <i class="fas fa-lightbulb"></i> Fun Facts Sekolah

            </h1>

            <div class="facts-container" id="factsContainer">

                <!-- Fakta akan dimasukkan melalui JavaScript -->

            </div>

        </div>

    </div>



    <script src="js/script.js"></script>

</body>

  </html>
  
  
css/style.css:

/* ==============================

   VARIABLES & RESET

   ============================== */

:root {

    /* Light Mode Colors (default) */

    --bg-primary: #f0f2f5;

    --bg-secondary: #ffffff;

    --card-bg: #ffffff;

    --text-primary: #1a1a1a;

    --text-secondary: #666666;

    --accent-color: #667eea;

    --accent-light: #f0f3ff;

    --border-color: #e0e0e0;

    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);

    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);

    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.15);

    

    /* Animation */

    --transition-fast: 0.2s ease;

    --transition-normal: 0.3s ease;

    --transition-slow: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

}



.dark-mode {

    /* Dark Mode Colors */

    --bg-primary: #0d1117;

    --bg-secondary: #161b22;

    --card-bg: #21262d;

    --text-primary: #e6edf3;

    --text-secondary: #8b949e;

    --accent-color: #58a6ff;

    --accent-light: rgba(88, 166, 255, 0.1);

    --border-color: #30363d;

    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.3);

    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);

    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);

}



* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}



html {

    scroll-behavior: smooth;

}



body {

    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    background-color: var(--bg-primary);

    color: var(--text-primary);

    line-height: 1.6;

    transition: background-color var(--transition-normal), color var(--transition-normal);

    min-height: 100vh;

    overflow-x: hidden;

}



.container {

    max-width: 1200px;

    margin: 0 auto;

    padding: 20px;

    min-height: 100vh;

    position: relative;

}



/* ==============================

   TOMBOL TOGGLE TEMA

   ============================== */

.theme-toggle {

    position: fixed;

    top: 20px;

    right: 20px;

    width: 56px;

    height: 56px;

    border-radius: 50%;

    background: var(--card-bg);

    border: 2px solid var(--border-color);

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    box-shadow: var(--shadow-md);

    z-index: 1000;

    transition: all var(--transition-fast);

    overflow: hidden;

}



.theme-toggle:hover {

    transform: translateY(-3px);

    box-shadow: var(--shadow-lg);

}



.theme-toggle:active {

    transform: translateY(-1px);

}



/* ==============================

   TOMBOL KEMBALI FIXED

   ============================== */

.back-fixed {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--card-bg);
    border: 2px solid var(--border-color);
    cursor: pointer;
    display: none; /* Awalnya disembunyikan */
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
    z-index: 1000;
    transition: all var(--transition-normal);
    overflow: hidden;
    color: var(--text-primary);
    font-size: 0; /* Sembunyikan teks */
    white-space: nowrap;
}

.back-fixed:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
    width: auto;
    border-radius: 28px;
    padding: 0 20px;
    font-size: 1rem;
}

.back-fixed:hover i {
    margin-right: 8px;
}

.back-fixed i {
    font-size: 1.5rem;
    transition: margin-right var(--transition-fast);
}

.back-fixed:active {
    transform: translateY(-1px);
}

/* Efek animasi gelombang saat hover */
.back-fixed::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
    );
    transition: left 0.6s ease;
}

.back-fixed:hover::before {
    left: 100%;
}

/* Animasi masuk/keluar */
@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideOutLeft {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-30px);
    }
}

.back-fixed.show {
    display: flex;
    animation: slideInLeft 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.back-fixed.hide {
    animation: slideOutLeft 0.3s ease-out forwards;
}

/* Untuk mobile */
@media (max-width: 768px) {
    .back-fixed {
        width: 50px;
        height: 50px;
        top: 15px;
        left: 15px;
    }

    .back-fixed:hover {
        width: auto;
        border-radius: 25px;
        padding: 0 15px;
        font-size: 0.9rem;
    }
}

/* Responsif sangat kecil */
@media (max-width: 480px) {
    .back-fixed {
        width: 45px;
        height: 45px;
        top: 12px;
        left: 12px;
    }

    .back-fixed i {
        font-size: 1.3rem;
    }
}

/* Hapus back-nav yang lama */
.back-nav {
    display: none;
}



.sun-moon {

    position: relative;

    width: 28px;

    height: 28px;

    display: flex;

    align-items: center;

    justify-content: center;

}



.sun, .moon {

    position: absolute;

    width: 20px;

    height: 20px;

    border-radius: 50%;

    transition: all var(--transition-normal);

}



.sun {

    background-color: #fbbf24;

    opacity: 1;

    transform: scale(1);

}



.moon {

    background-color: #60a5fa;

    opacity: 0;

    transform: scale(0.5);

}



.dark-mode .sun {

    opacity: 0;

    transform: scale(0.5);

}



.dark-mode .moon {

    opacity: 1;

    transform: scale(1);

}



/* ==============================

   TAMPILAN LAYAR

   ============================== */

.screen {

    display: none;

    opacity: 0;

    transform: translateY(20px);

    animation: fadeInUp 0.5s ease-out forwards;

}



.screen.active {

    display: block;

    opacity: 1;

    transform: translateY(0);

}



@keyframes fadeInUp {

    from {

        opacity: 0;

        transform: translateY(30px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }

}



/* ==============================

   MENU UTAMA

   ============================== */

.title-container {

    text-align: center;

    margin: 40px 0 50px;

    padding: 20px;

}



.main-title {

    font-size: 2.8rem;

    font-weight: 800;

    margin-bottom: 10px;

    color: var(--text-primary);

    letter-spacing: -1px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 15px;

    animation: slideDown 0.8s ease-out;

}



.main-title i {

    font-size: 2.5rem;

}



@keyframes slideDown {

    from {

        opacity: 0;

        transform: translateY(-30px);

    }

    to {

        opacity: 1;

        transform: translateY(0);

    }

}



.subtitle-main {

    font-size: 1.5rem;

    font-weight: 600;

    color: var(--accent-color);

    margin-bottom: 8px;

}



.current-date {

    font-size: 1rem;

    font-weight: 500;

    color: var(--text-secondary);

    letter-spacing: 0.5px;

}



/* Pemilihan Kelas */

.class-selection {

    text-align: center;

    margin: 60px 0;

    padding: 30px 20px;

    background: var(--accent-light);

    border-radius: 16px;

    border: 2px solid transparent;

    transition: all var(--transition-normal);

}



.selection-title {

    font-size: 1.4rem;

    font-weight: 700;

    margin-bottom: 30px;

    color: var(--text-primary);

}



.class-buttons {

    display: flex;

    justify-content: center;

    gap: 25px;

    flex-wrap: wrap;

    margin-bottom: 30px;

}



.class-btn {

    width: 160px;

    height: 160px;

    border-radius: 16px;

    background: var(--color, linear-gradient(135deg, #667eea 0%, #764ba2 100%));

    border: none;

    color: white;

    cursor: pointer;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 12px;

    transition: all var(--transition-fast);

    box-shadow: var(--shadow-md);

    position: relative;

    overflow: hidden;

}



.class-btn::before {

    content: '';

    position: absolute;

    top: 0;

    left: -100%;

    width: 100%;

    height: 100%;

    background: rgba(255, 255, 255, 0.2);

    transition: left var(--transition-normal);

}



.class-btn:hover::before {

    left: 100%;

}



.class-btn:hover {

    transform: translateY(-8px);

    box-shadow: var(--shadow-lg);

}



.class-btn:active {

    transform: translateY(-4px);

}



.class-number {

    font-size: 2.5rem;

    font-weight: 800;

    line-height: 1;

}



.class-label {

    font-size: 0.95rem;

    font-weight: 600;

    opacity: 0.95;

}



/* Tombol Fun Facts */

.fun-facts-btn {

    display: inline-block;

    padding: 16px 40px;

    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

    color: white;

    border: none;

    border-radius: 50px;

    font-size: 1.05rem;

    font-weight: 700;

    cursor: pointer;

    transition: all var(--transition-fast);

    box-shadow: var(--shadow-md);

    margin: 0 auto;

    display: block;

    gap: 10px;

}



.fun-facts-btn:hover {

    transform: translateY(-3px);

    box-shadow: var(--shadow-lg);

}



.fun-facts-btn:active {

    transform: translateY(-1px);

}



.fun-facts-btn i {

    margin-right: 8px;

}



/* ==============================

   TAMPILAN PEMILIHAN ROMBEL

   ============================== */
   
.section-title {

    font-size: 2rem;

    font-weight: 800;

    margin-bottom: 40px;

    color: var(--text-primary);

    text-align: center;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

}



.rombel-grid {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

    gap: 16px;

    margin-bottom: 20px;

}



.rombel-btn {

    padding: 20px 15px;

    background: var(--card-bg);

    border: 2px solid var(--border-color);

    border-radius: 12px;

    color: var(--text-primary);

    font-size: 1.1rem;

    font-weight: 700;

    cursor: pointer;

    transition: all var(--transition-fast);

    box-shadow: var(--shadow-sm);

    display: flex;

    align-items: center;

    justify-content: center;

    min-height: 100px;

    position: relative;

    overflow: hidden;

}



.rombel-btn::before {

    content: '';

    position: absolute;

    top: 0;

    left: -100%;

    width: 100%;

    height: 100%;

    background: var(--accent-light);

    transition: left var(--transition-normal);

}



.rombel-btn:hover::before {

    left: 100%;

}



.rombel-btn:hover {

    transform: translateY(-4px);

    box-shadow: var(--shadow-md);

    border-color: var(--accent-color);

    color: var(--accent-color);

}



@keyframes slideInFromBottom {

    0% {

        opacity: 0;

        transform: translateY(20px);

    }

    100% {

        opacity: 1;

        transform: translateY(0);

    }

}



.rombel-btn {

    animation: slideInFromBottom 0.4s ease-out forwards;

    animation-delay: calc(var(--i) * 0.05s);

}



/* ==============================

   TAMPILAN PEMILIHAN HARI

   ============================== */

.day-grid {

    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));

    gap: 20px;

}



.day-btn {

    padding: 25px 20px;

    background: var(--card-bg);

    border: 2px solid var(--border-color);

    border-radius: 12px;

    color: var(--text-primary);

    font-size: 1.05rem;

    font-weight: 700;

    cursor: pointer;

    transition: all var(--transition-fast);

    box-shadow: var(--shadow-sm);

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 12px;

}



.day-btn i {

    font-size: 1.8rem;

    color: var(--accent-color);

}



.day-btn:hover {

    transform: translateY(-4px);

    box-shadow: var(--shadow-md);

    border-color: var(--accent-color);

    background: var(--accent-light);

    color: var(--accent-color);

}



/* ==============================

   TAMPILAN JADWAL

   ============================== */

.schedule-container {

    background: var(--card-bg);

    border-radius: 16px;

    overflow: hidden;

    box-shadow: var(--shadow-md);

    margin-bottom: 40px;

    border: 1px solid var(--border-color);

}



.schedule-header {

    display: grid;

    grid-template-columns: 120px 1fr;

    background: linear-gradient(135deg, var(--accent-color), #764ba2);

    padding: 20px;

    font-weight: 700;

    color: white;

    gap: 20px;

}



.schedule-header > div {

    display: flex;

    align-items: center;

    gap: 10px;

}



.schedule-list {

    max-height: 600px;

    overflow-y: auto;

}



.schedule-list::-webkit-scrollbar {

    width: 8px;

}



.schedule-list::-webkit-scrollbar-track {

    background: var(--bg-primary);

}



.schedule-list::-webkit-scrollbar-thumb {

    background: var(--border-color);

    border-radius: 4px;

}



.schedule-list::-webkit-scrollbar-thumb:hover {

    background: var(--text-secondary);

}



.schedule-item {

    display: grid;

    grid-template-columns: 120px 1fr;

    padding: 20px;

    border-bottom: 1px solid var(--border-color);

    transition: all var(--transition-fast);

    gap: 20px;

    align-items: center;

}



.schedule-item:hover {

    background-color: var(--accent-light);

    border-left: 4px solid var(--accent-color);

    padding-left: 16px;

}



.schedule-item:last-child {

    border-bottom: none;

}



.time-slot {

    font-weight: 700;

    color: var(--accent-color);

    display: flex;

    align-items: center;

    gap: 8px;

    font-size: 0.95rem;

}



.subject {

    font-weight: 600;

    color: var(--text-primary);

    display: flex;

    align-items: center;

    gap: 8px;

}



/* ==============================

   TAMPILAN FUN FACTS

   ============================== */

.facts-container {

    display: grid;

    gap: 30px;

    margin-bottom: 40px;

}



.fact-category {

    background: var(--card-bg);

    border-radius: 16px;

    padding: 25px;

    box-shadow: var(--shadow-sm);

    border: 2px solid var(--border-color);

    transition: all var(--transition-fast);

}



.fact-category:hover {

    box-shadow: var(--shadow-md);

    border-color: var(--accent-color);

    transform: translateY(-2px);

}



.fact-category h3 {

    font-size: 1.4rem;

    font-weight: 700;

    margin-bottom: 20px;

    color: var(--accent-color);

    display: flex;

    align-items: center;

    gap: 12px;

    padding-bottom: 15px;

    border-bottom: 2px solid var(--accent-light);

}



.fact-category h3 i {

    font-size: 1.5rem;

}



.fact-category ul {

    list-style: none;

}



.fact-item {

    padding: 15px;

    margin-bottom: 12px;

    background: var(--accent-light);

    border-radius: 10px;

    border-left: 4px solid var(--accent-color);

    transition: all var(--transition-fast);

    color: var(--text-primary);

    line-height: 1.6;

}



.fact-item:hover {

    background: var(--accent-color);

    color: white;

    transform: translateX(4px);

}



.fact-item:last-child {

    margin-bottom: 0;

}



.fact-item strong {

    color: var(--accent-color);

    font-weight: 700;

}



.fact-item:hover strong {

    color: white;

}



/* ==============================

   RESPONSIF MOBILE

   ============================== */

@media (max-width: 768px) {

    .container {

        padding: 15px;

    }



    .theme-toggle {

        width: 50px;

        height: 50px;

        top: 15px;

        right: 15px;

    }



    .main-title {

        font-size: 2rem;

    }



    .main-title i {

        font-size: 1.8rem;

    }



    .subtitle-main {

        font-size: 1.2rem;

    }



    .current-date {

        font-size: 0.9rem;

    }



    .class-selection {

        padding: 20px 15px;

        margin: 40px 0;

    }



    .selection-title {

        font-size: 1.2rem;

        margin-bottom: 20px;

    }



    .class-buttons {

        gap: 15px;

    }



    .class-btn {

        width: 140px;

        height: 140px;

    }



    .class-number {

        font-size: 2rem;

    }



    .class-label {

        font-size: 0.85rem;

    }



    .fun-facts-btn {

        font-size: 0.95rem;

        padding: 14px 32px;

    }



    .section-title {

        font-size: 1.6rem;

    }



    .rombel-grid {

        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

        gap: 12px;

    }



    .rombel-btn {

        font-size: 1rem;

        min-height: 90px;

    }



    .day-grid {

        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));

        gap: 15px;

    }



    .day-btn {

        padding: 20px 15px;

        font-size: 0.95rem;

    }



    .day-btn i {

        font-size: 1.5rem;

    }



    .schedule-header {

        grid-template-columns: 100px 1fr;

        padding: 15px;

        font-size: 0.9rem;

    }



    .schedule-item {

        grid-template-columns: 100px 1fr;

        padding: 15px;

        gap: 15px;

    }



    .time-slot {

        font-size: 0.85rem;

    }



    .fact-category {

        padding: 18px;

    }



    .fact-category h3 {

        font-size: 1.2rem;

        margin-bottom: 15px;

    }



    .fact-item {

        padding: 12px;

        font-size: 0.95rem;

    }

}



/* ==============================

   RESPONSIF EXTRA SMALL

   ============================== */

@media (max-width: 480px) {

    .title-container {

        margin: 25px 0 35px;

        padding: 15px;

    }



    .main-title {

        font-size: 1.6rem;

        gap: 10px;

    }



    .main-title i {

        font-size: 1.4rem;

    }



    .subtitle-main {

        font-size: 1rem;

    }



    .class-buttons {

        flex-direction: column;

        align-items: center;

        gap: 15px;

    }



    .class-btn {

        width: 100%;

        max-width: 160px;

    }



    .rombel-grid {

        grid-template-columns: repeat(2, 1fr);

    }



    .day-grid {

        grid-template-columns: 1fr;

    }



    .schedule-header {

        grid-template-columns: 80px 1fr;

        gap: 10px;

        padding: 12px;

    }



    .schedule-item {

        grid-template-columns: 80px 1fr;

        padding: 12px;

        gap: 10px;

    }



    .back-btn {

        font-size: 0.9rem;

        padding: 8px 16px;

    }



    .fact-category {

        padding: 15px;

    }



    .fact-item {

        padding: 10px;

        font-size: 0.9rem;

    }

}



/* ==============================

   RESPONSIF TABLET

   ============================== */

@media (min-width: 769px) and (max-width: 1024px) {

    .class-buttons {

        gap: 20px;

    }



    .class-btn {

        width: 150px;

        height: 150px;

    }



    .rombel-grid {

        grid-template-columns: repeat(3, 1fr);

    }



    .day-grid {

        grid-template-columns: repeat(2, 1fr);

    }

}



/* ==============================

   PRINT STYLE

   ============================== */

@media print {

    .theme-toggle,

    .back-nav,

    .class-selection,

    .fun-facts-btn {

        display: none;

    }



    .schedule-container {

        box-shadow: none;

        page-break-inside: avoid;

    }

   }
   
script.js:

// Di awal file, tambahkan:
console.log('Script loaded successfully');

// Cek apakah ada error parsing
try {
    // Data scheduleData yang sudah diperbaiki...
} catch (error) {
    console.error('Error in scheduleData:', error);
    alert('Terjadi kesalahan dalam data jadwal. Silakan periksa console.');
}

// Event listener debug
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
});

// Data Jadwal Lengkap dari file jadwal.txt
const scheduleData = {
    "7": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Prakarya" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPS" },
                { time: "08.40 - 09.20", subject: "IPS" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Inggris" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        }
    },
    "8": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "Prakarya" },
                { time: "10.00 - 10.40", subject: "Prakarya" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "TIK" },
                { time: "08.40 - 09.20", subject: "TIK" },
                { time: "09.20 - 10.00", subject: "Mulok" },
                { time: "10.00 - 10.40", subject: "Mulok" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "Matematika" },
                { time: "10.00 - 10.40", subject: "Matematika" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa IndonesiaPKn" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "Bahasa Indonesia" },
                { time: "10.00 - 10.40", subject: "Bahasa Indonesia" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Bahasa Inggris" },
                { time: "09.20 - 10.00", subject: "Bahasa Inggris" },
                { time: "10.00 - 10.40", subject: "Bahasa Inggris" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "IPS" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PJOK" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Prakarya" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "BINDO MA" },
                { time: "08.10 - 08.50", subject: "BINDO MA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Matematika" },
                { time: "08.40 - 09.20", subject: "Matematika" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "13": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "MLK 8.11" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "IPS" },
                { time: "09.30 - 10.10", subject: "IPS" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "TIK" },
                { time: "08.10 - 08.50", subject: "TIK" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "MLK 8.14" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Prakarya" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "14": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        }
    },
    "9": {
        "1": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 10.50", subject: "TIK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "PJOK" },
                { time: "12.20 - 13.00", subject: "PJOK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "2": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 10.50", subject: "PKn" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Prakarya" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "3": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 10.50", subject: "Agama" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Bahasa Indonesia" },
                { time: "08.40 - 09.20", subject: "Bahasa Indonesia" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "4": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Prakarya" },
                { time: "10.10 - 10.50", subject: "Prakarya" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "IPA" },
                { time: "08.40 - 09.20", subject: "IPA" },
                { time: "09.20 - 10.00", subject: "PKn" },
                { time: "10.00 - 10.40", subject: "PKn" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "5": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 10.50", subject: "Matematika" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Matematika" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "TIK" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PKn" },
                { time: "08.40 - 09.20", subject: "PKn" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "6": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 10.50", subject: "Bahasa Inggris" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Agama" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Mulok" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Inggris" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Agama" },
                { time: "08.40 - 09.20", subject: "Agama" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "7": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Inggris" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "TIK" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Mulok" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "8": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 10.50", subject: "PJOK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Agama" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPS" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "PKn" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "TIK" },
                { time: "10.00 - 10.40", subject: "TIK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "9": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Prakarya" },
                { time: "12.20 - 13.00", subject: "Prakarya" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "IPA" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "10": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 10.50", subject: "PJOK" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Bahasa Inggris" },
                { time: "09.30 - 10.10", subject: "Bahasa Inggris" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Matematika" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Bahasa Indonesia" },
                { time: "08.10 - 08.50", subject: "Bahasa Indonesia" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "PKn" },
                { time: "12.20 - 13.00", subject: "TIK" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "PJOK" },
                { time: "08.40 - 09.20", subject: "PJOK" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "11": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Prakarya" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 10.50", subject: "IPA" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Matematika" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Prakarya" },
                { time: "08.10 - 08.50", subject: "Prakarya" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "12": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Matematika" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "IPA" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "Matematika" },
                { time: "09.30 - 10.10", subject: "Matematika" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "IPA" },
                { time: "10.00 - 10.40", subject: "IPA" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "13": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 10.50", subject: "Bahasa Indonesia" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "Agama" },
                { time: "12.20 - 13.00", subject: "Agama" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PJOK" },
                { time: "09.30 - 10.10", subject: "PJOK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPS" },
                { time: "08.10 - 08.50", subject: "IPS" },
                { time: "08.50 - 09.30", subject: "Bahasa Indonesia" },
                { time: "09.30 - 10.10", subject: "Bahasa Indonesia" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Indonesia" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PKn" },
                { time: "08.10 - 08.50", subject: "PKn" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Agama" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "IPA" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "PJOK" },
                { time: "10.00 - 10.40", subject: "PJOK" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        },
        "14": {
            "SENIN": [
                { time: "07.00 - 08.10", subject: "Upacara Bendera" },
                { time: "08.10 - 08.50", subject: "Agama" },
                { time: "08.50 - 09.30", subject: "Agama" },
                { time: "09.30 - 10.10", subject: "Mulok" },
                { time: "10.10 - 10.50", subject: "Mulok" },
                { time: "10.50 - 11.40", subject: "Istirahat" },
                { time: "11.40 - 12.20", subject: "IPS" },
                { time: "12.20 - 13.00", subject: "IPS" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "SELASA": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "PJOK" },
                { time: "08.10 - 08.50", subject: "PJOK" },
                { time: "08.50 - 09.30", subject: "TIK" },
                { time: "09.30 - 10.10", subject: "TIK" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Mulok" },
                { time: "11.40 - 12.20", subject: "Mulok" },
                { time: "12.20 - 13.00", subject: "Bahasa Inggris" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "RABU": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "IPA" },
                { time: "08.10 - 08.50", subject: "IPA" },
                { time: "08.50 - 09.30", subject: "PKn" },
                { time: "09.30 - 10.10", subject: "PKn" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "PKn" },
                { time: "11.40 - 12.20", subject: "Bahasa Indonesia" },
                { time: "12.20 - 13.00", subject: "Bahasa Indonesia" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "KAMIS": [
                { time: "07.00 - 07.30", subject: "Apel/Literasi Kelas" },
                { time: "07.30 - 08.10", subject: "Mulok" },
                { time: "08.10 - 08.50", subject: "Mulok" },
                { time: "08.50 - 09.30", subject: "IPA" },
                { time: "09.30 - 10.10", subject: "IPA" },
                { time: "10.10 - 11.00", subject: "Istirahat" },
                { time: "11.00 - 11.40", subject: "Bahasa Inggris" },
                { time: "11.40 - 12.20", subject: "Bahasa Inggris" },
                { time: "12.20 - 13.00", subject: "Matematika" },
                { time: "13.00 - 13.40", subject: "Proyek" },
                { time: "13.40 - 14.20", subject: "Proyek" }
            ],
            "JUMAT": [
                { time: "07.00 - 08.00", subject: "Ibadah" },
                { time: "08.00 - 08.40", subject: "Mulok" },
                { time: "08.40 - 09.20", subject: "Mulok" },
                { time: "09.20 - 10.00", subject: "IPS" },
                { time: "10.00 - 10.40", subject: "IPS" },
                { time: "10.40 - 11.10", subject: "Istirahat" },
                { time: "11.10 - 11.50", subject: "Proyek" },
                { time: "11.50 - 12.30", subject: "Proyek" }
            ]
        }
    }
};

// Data Fun Facts (sama seperti sebelumnya)
const funFactsData = [
    {
        title: "📊 Jumlah Guru Per Mata Pelajaran",
        items: [
            "Agama: 9 guru (3 Kristen, 3 Islam, 2 Katolik, 1 tidak spesifik)",
            "PKn: 5 guru",
            "Bahasa Indonesia:  10 guru",
            "Matematika: 8 guru",
            "Bahasa Inggris: 8 guru",
            "IPA: 7 guru",
            "IPS: 6 guru",
            "PJOK: 7 guru",
            "Prakarya/Seni Budaya: 5 guru",
            "TIK: 4 guru"
        ]
    },
    {
        title: "👥 Perbandingan Gender",
        items: [
            "Guru Perempuan:  Sekitar 85% (~55 dari 65)",
            "Guru Laki-laki: Sekitar 15% (~10 dari 65)",
            "Mayoritas guru adalah perempuan"
        ]
    },
    {
        title: "🎓 Guru dengan Gelar Akademik Tertinggi",
        items:  [
            "John Wuisan, M.  Th (Magister Theologi)",
            "Sicilia Ledy S Sambur, M.  Pd (Magister Pendidikan)",
            "Hesty M. Lontoh, S. Pd & M.  Pd (Sarjana Pendidikan & Magister Pendidikan)",
            "Marjeine Dalonto, M. Pd (Magister Pendidikan)"
        ]
    },
    {
        title: "⏰ Jam Mengajar Terbanyak",
        items:  [
            "Abdul Wahid, S. Pd.  I (Agama Islam): 36 JP",
            "Nita A. Modali, S.Kom (TIK): 42 JP",
            "Christi Tumangkeng, S.Pd (TIK): 42 JP",
            "Guru TIK memiliki beban jam tertinggi"
        ]
    }
];

// State aplikasi
let currentState = {
    selectedClass: null,
    selectedRombel: null,
    selectedDay: null
};

// Elemen DOM
const screens = {
    mainMenu: document.getElementById('mainMenu'),
    rombelSelection: document.getElementById('rombelSelection'),
    daySelection: document.getElementById('daySelection'),
    scheduleDisplay: document.getElementById('scheduleDisplay'),
    funFactsDisplay: document.getElementById('funFactsDisplay')
};

const elements = {
    themeToggle: document.getElementById('themeToggle'),
    currentDate: document.getElementById('currentDate'),
    classButtons: document.querySelectorAll('.class-btn'),
    funFactsBtn: document.getElementById('funFactsBtn'),
    fixedBackButton: document.getElementById('fixedBackButton'),
    rombelTitle: document.getElementById('rombelTitle'),
    rombelGrid: document.getElementById('rombelGrid'),
    dayTitle: document.getElementById('dayTitle'),
    dayButtons: document.querySelectorAll('.day-btn'),
    scheduleTitle: document.getElementById('scheduleTitle'),
    scheduleList: document.getElementById('scheduleList'),
    factsContainer: document.getElementById('factsContainer')
};

// ===== FUNGSI UTILITAS =====
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('id-ID', options);
    elements.currentDate.textContent = formattedDate;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body. classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// ===== FUNGSI NAVIGASI LAYAR =====
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }
    
    // Kontrol tombol kembali
    const backTargets = {
        'mainMenu': null,
        'rombelSelection':  'mainMenu',
        'daySelection':  'rombelSelection',
        'scheduleDisplay': 'daySelection',
        'funFactsDisplay': 'mainMenu'
    };
    
    const targetScreen = backTargets[screenName];
    controlBackButton(targetScreen !== null, targetScreen);
}

// ===== FUNGSI UNTUK MENAMPILKAN ROMBEL (DIPERBAIKI) =====
function showRombels(className) {
    currentState.selectedClass = className;
    
    // Gunakan elemen yang benar untuk judul
    const dayTitle = document.getElementById('dayTitle');
    if (dayTitle) {
        dayTitle.textContent = `Kelas ${className}`;
    }
    
    elements.rombelGrid.innerHTML = '';
    
    // Ambil daftar rombel yang tersedia di data
    const rombels = scheduleData[className] ? Object.keys(scheduleData[className]) : [];
    
    if (rombels.length === 0) {
        elements.rombelGrid.innerHTML = '<p>Tidak ada data rombel untuk kelas ini</p>';
        return;
    }
    
    rombels.forEach((rombelNum, index) => {
        const rombelBtn = document.createElement('button');
        rombelBtn.className = 'rombel-btn';
        rombelBtn.textContent = `${className}-${rombelNum}`;
        rombelBtn.style.setProperty('--i', index + 1);
        
        rombelBtn.addEventListener('click', () => {
            currentState.selectedRombel = rombelNum;
            showDays();
        });
        
        elements.rombelGrid.appendChild(rombelBtn);
    });
    
    showScreen('rombelSelection');
}


// ===== FUNGSI UNTUK MENAMPILKAN HARI =====
function showDays() {
    elements.dayTitle.textContent = `Kelas ${currentState.selectedClass}-${currentState.selectedRombel}`;
    showScreen('daySelection');
}

// ===== FUNGSI UNTUK MENAMPILKAN FUN FACTS =====
function showFunFacts() {
    elements.factsContainer.innerHTML = '';
    
    funFactsData.forEach((fact, index) => {
        const factCategory = document.createElement('div');
        factCategory.className = 'fact-category fade-in';
        factCategory.style.animationDelay = `${index * 0.2}s`;
        
        const title = document.createElement('h3');
        title.innerHTML = fact.title;
        
        const list = document.createElement('ul');
        
        fact.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'fact-item';
            listItem.textContent = item;
            list.appendChild(listItem);
        });
        
        factCategory.appendChild(title);
        factCategory.appendChild(list);
        elements.factsContainer.appendChild(factCategory);
    });
    
    showScreen('funFactsDisplay');
}

// ===== FUNGSI KONTROL TOMBOL KEMBALI =====
function controlBackButton(show, targetScreen = null) {
    const backButton = elements.fixedBackButton;
    
    if (show) {
        backButton.onclick = () => {
            if (targetScreen) {
                showScreen(targetScreen);
            }
        };
        
        backButton.classList.remove('hide');
        setTimeout(() => {
            backButton.classList.add('show');
        }, 10);
    } else {
        backButton.classList.remove('show');
        backButton.classList.add('hide');
        
        setTimeout(() => {
            backButton.classList.remove('hide');
            backButton.onclick = null;
        }, 300);
    }
}

// ===== FUNGSI UNTUK MENAMPILKAN JADWAL =====
function showSchedule(day) {
    currentState.selectedDay = day;
    
    const dayNames = {
        'SENIN': 'Senin',
        'SELASA': 'Selasa',
        'RABU': 'Rabu',
        'KAMIS': 'Kamis',
        'JUMAT': 'Jumat'
    };
    
    elements.scheduleTitle.textContent = `Jadwal ${dayNames[day]} - Kelas ${currentState.selectedClass}-${currentState.selectedRombel}`;
    elements.scheduleList.innerHTML = '';
    
    // PERBAIKAN: Hapus spasi pada optional chaining
    const schedule = scheduleData[currentState.selectedClass]?.[currentState.selectedRombel]?.[day];
    
    if (schedule && schedule.length > 0) {
        schedule.forEach((item, index) => {
            const scheduleItem = document.createElement('div');
            scheduleItem.className = 'schedule-item fade-in';
            scheduleItem.style.animationDelay = `${index * 0.1}s`;
            
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.innerHTML = `<i class="fas fa-clock"></i> ${item.time}`;
            
            const subject = document.createElement('div');
            subject.className = 'subject';
            subject.innerHTML = `<i class="fas fa-book"></i> ${item.subject}`;
            
            scheduleItem.appendChild(timeSlot);
            scheduleItem.appendChild(subject);
            elements.scheduleList.appendChild(scheduleItem);
        });
    } else {
        const noSchedule = document.createElement('div');
        noSchedule.className = 'schedule-item fade-in';
        noSchedule.innerHTML = '<div class="time-slot">-</div><div class="subject">Tidak ada jadwal untuk hari ini</div>';
        elements.scheduleList.appendChild(noSchedule);
    }
    
    showScreen('scheduleDisplay');
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Toggle tema
    elements.themeToggle.addEventListener('click', toggleTheme);
    
    // Tombol kelas (7, 8, 9)
    elements.classButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            console.log('Class button clicked:', this.getAttribute('data-class'));
            const className = this.getAttribute('data-class');
            showRombels(className);
        });
    });
    
    // Debug: Cek jumlah tombol kelas yang ditemukan
    console.log('Found class buttons:', elements.classButtons.length);
    
    // Tombol hari
    elements.dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const day = this.getAttribute('data-day');
            console.log('Day selected:', day);
            showSchedule(day);
        });
    });
    
    // Tombol fun facts
    elements.funFactsBtn.addEventListener('click', function() {
        console.log('Fun Facts button clicked');
        showFunFacts();
    });
    
    // Debug: Tampilkan struktur data
    console.log('Schedule data structure:', Object.keys(scheduleData));
}

// PERBAIKAN: Hapus kurung kurawal tambahan di akhir
document.addEventListener('DOMContentLoaded', init);