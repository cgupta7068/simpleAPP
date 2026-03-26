import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    axios.get("/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account information</p>
      </div>

      {user && (
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-avatar">
              <div className="avatar-circle">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="profile-info">
              <h2>{user.name}</h2>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div>
                    <label>Email</label>
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🌍</span>
                  <div>
                    <label>Country</label>
                    <p>{user.country || 'Not specified'}</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🆔</span>
                  <div>
                    <label>User ID</label>
                    <p>{user.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="logout-btn" onClick={handleLogout}>
              <span>🚪</span>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}