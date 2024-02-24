import React, { useState } from 'react';

const Settings = () => {
    const [settings, setSettings] = useState({
        spotifyEnabled: false,
        notificationsEnabled: false,
    });

    // Define sample data for blocked accounts and watch history
    const blockedAccounts = [
        { id: 1, username: 'BlockedUser1' },
        { id: 2, username: 'BlockedUser2' },
        // Add more blocked accounts as needed
    ];

    const watchHistory = [
        { id: 1, username: 'WatchedUser1' },
        { id: 2, username: 'WatchedUser2' },
        // Add more watched accounts as needed
    ];

    const handleInputChange = (e) => {
        const { name, checked } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: checked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save settings (e.g., API call)
        console.log('Settings submitted:', settings);
    };

    return (
        <div className="settings">
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        type="checkbox"
                        name="spotifyEnabled"
                        checked={settings.spotifyEnabled}
                        onChange={handleInputChange}
                    />
                    Enable Spotify Music
                </label>

                <label>
                    <input
                        type="checkbox"
                        name="notificationsEnabled"
                        checked={settings.notificationsEnabled}
                        onChange={handleInputChange}
                    />
                    Enable Notifications
                </label>

                <h3>Activity Center</h3>
                <p>Blocked Accounts</p>
                {/* Add logic to display blocked accounts */}
                {/* For demonstration purposes, assuming blockedAccounts is an array of blocked accounts */}
                <ul>
                    {blockedAccounts.map((account) => (
                        <li key={account.id}>{account.username}</li>
                    ))}
                </ul>

                <p>Watch History</p>
                {/* Add logic to display watch history */}
                {/* For demonstration purposes, assuming watchHistory is an array of swiped accounts */}
                <ul>
                    {watchHistory.map((account) => (
                        <li key={account.id}>{account.username}</li>
                    ))}
                </ul>

                <button type="submit">Save Settings</button>
            </form>
        </div>
    );
};

export default Settings;
