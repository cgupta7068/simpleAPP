import { useState } from "react";
import "./Services.css";

export default function Services() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth(currentDate);
    const firstDay = firstDayOfMonth(currentDate);

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= totalDays; day++) {
      const isToday = day === new Date().getDate() &&
                     currentDate.getMonth() === new Date().getMonth() &&
                     currentDate.getFullYear() === new Date().getFullYear();
      days.push(
        <div key={day} className={`calendar-day ${isToday ? 'today' : ''}`}>
          {day}
        </div>
      );
    }

    return days;
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>

      <div className="services-grid">
        {/* Traditional Calendar */}
        <div className="service-card">
          <h2>Traditional Calendar</h2>
          <div className="calendar-container">
            <div className="calendar-header">
              <button onClick={prevMonth} className="nav-btn">‹</button>
              <h3>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h3>
              <button onClick={nextMonth} className="nav-btn">›</button>
            </div>
            <div className="calendar-grid">
              {dayNames.map(day => (
                <div key={day} className="calendar-day header">{day}</div>
              ))}
              {renderCalendar()}
            </div>
          </div>
        </div>

        {/* Digital Calendar */}
        <div className="service-card">
          <h2>Digital Calendar</h2>
          <div className="digital-calendar">
            <div className="digital-date">
              <div className="date-number">{new Date().getDate()}</div>
              <div className="date-info">
                <div className="month">{monthNames[new Date().getMonth()]}</div>
                <div className="year">{new Date().getFullYear()}</div>
                <div className="day">{dayNames[new Date().getDay()]}</div>
              </div>
            </div>
            <div className="digital-time">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}