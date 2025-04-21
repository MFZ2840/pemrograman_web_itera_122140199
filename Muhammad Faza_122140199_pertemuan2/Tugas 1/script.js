class Dashboard {
    constructor() {
      this.schedules = JSON.parse(localStorage.getItem('schedules')) || [];
      this.scheduleListEl = document.getElementById('scheduleList');
      this.init();
      this.loadInitialData();
    }
  
    init = () => {
      document.getElementById('addScheduleBtn').addEventListener('click', () => this.addSchedule());
      this.renderSchedules();
    }
  
    loadInitialData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Data awal jadwal kuliah dimuat.');
    }
  
    saveSchedules = () => localStorage.setItem('schedules', JSON.stringify(this.schedules));
  
    addSchedule = () => {
      const course = document.getElementById('courseInput').value.trim();
      const time = document.getElementById('timeInput').value.trim();
      const room = document.getElementById('roomInput').value.trim();
  
      if (!course || !time || !room) {
        return alert('Semua field harus diisi!');
      }
  
      this.schedules.push({ id: Date.now(), course, time, room });
      this.saveSchedules();
      this.renderSchedules();
      document.getElementById('courseInput').value = '';
      document.getElementById('timeInput').value = '';
      document.getElementById('roomInput').value = '';
    }
  
    deleteSchedule = (id) => {
      this.schedules = this.schedules.filter(schedule => schedule.id !== id);
      this.saveSchedules();
      this.renderSchedules();
    }
  
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
  
  const dashboard = new Dashboard();
  