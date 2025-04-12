// Kelas Dashboard untuk mengelola jadwal kuliah
class Dashboard {
    constructor() {
      // Ambil data jadwal dari localStorage, gunakan array kosong jika tidak ada data
      this.schedules = JSON.parse(localStorage.getItem('schedules')) || [];
      this.scheduleListEl = document.getElementById('scheduleList');
      this.init(); // Inisialisasi event dan render jadwal
      // Panggil fungsi asinkron untuk simulasi pengambilan data (misalnya validasi awal)
      this.loadInitialData();
    }
  
    // Inisialisasi: pasang event listener dan render jadwal menggunakan arrow function
    init = () => {
      document.getElementById('addScheduleBtn').addEventListener('click', () => this.addSchedule());
      this.renderSchedules();
    }
  
    // Simulasi fungsi asinkron untuk pengambilan data awal (dapat dikembangkan sesuai kebutuhan)
    loadInitialData = async () => {
      // Simulasi delay 1 detik
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Data awal jadwal kuliah dimuat.');
      // Di sini Anda bisa menambahkan logika validasi/pengambilan data tambahan jika diperlukan
    }
  
    // Simpan data jadwal ke localStorage menggunakan arrow function
    saveSchedules = () => localStorage.setItem('schedules', JSON.stringify(this.schedules));
  
    // Tambah jadwal baru (menggunakan arrow function)
    addSchedule = () => {
      const course = document.getElementById('courseInput').value.trim();
      const time = document.getElementById('timeInput').value.trim();
      const room = document.getElementById('roomInput').value.trim();
  
      if (!course || !time || !room) {
        return alert('Semua field harus diisi!');
      }
  
      // Tambahkan jadwal baru dengan id unik
      this.schedules.push({ id: Date.now(), course, time, room });
      this.saveSchedules();
      this.renderSchedules();
      // Bersihkan input setelah ditambahkan
      document.getElementById('courseInput').value = '';
      document.getElementById('timeInput').value = '';
      document.getElementById('roomInput').value = '';
    }
  
    // Hapus jadwal menggunakan arrow function
    deleteSchedule = (id) => {
      this.schedules = this.schedules.filter(schedule => schedule.id !== id);
      this.saveSchedules();
      this.renderSchedules();
    }
  
    // Edit jadwal: Menggunakan prompt untuk memudahkan pengeditan (dapat dimodifikasi menjadi form modal jika diinginkan)
    editSchedule = (id) => {
      const schedule = this.schedules.find(s => s.id === id);
      if (!schedule) return;
      const newCourse = prompt('Edit Mata Kuliah:', schedule.course);
      const newTime = prompt('Edit Waktu:', schedule.time);
      const newRoom = prompt('Edit Ruangan:', schedule.room);
      if (newCourse && newTime && newRoom) {
        this.schedules = this.schedules.map(s => s.id === id ? { ...s, course: newCourse, time: newTime, room: newRoom } : s);
        this.saveSchedules();
        this.renderSchedules();
      }
    }
  
    // Render data jadwal ke tampilan menggunakan template literals dan arrow function
    renderSchedules = () => {
      if (this.schedules.length === 0) {
        this.scheduleListEl.innerHTML = '<p>Tidak ada jadwal kuliah yang ditambahkan.</p>';
        return;
      }
      this.scheduleListEl.innerHTML = this.schedules.map((schedule, idx) => `
        <div class="schedule-entry">
          <strong>${idx + 1}. ${schedule.course}</strong> <br>
          <em>${schedule.time}</em> - <span>${schedule.room}</span> <br>
          <div class="actions">
            <button onclick="dashboard.editSchedule(${schedule.id})">Edit</button>
            <button onclick="dashboard.deleteSchedule(${schedule.id})">Hapus</button>
          </div>
        </div>
      `).join('');
    }
  }
  
  // Inisialisasi dashboard dalam variabel global agar dapat diakses dalam atribut onclick
  const dashboard = new Dashboard();
  