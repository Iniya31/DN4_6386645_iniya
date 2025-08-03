import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome Back! ✈️</h2>
      <p>Book your flight below:</p>
      <form>
        <label>
          From:
          <input type="text" name="from" required />
        </label>
        <br />
        <label>
          To:
          <input type="text" name="to" required />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
        <br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default UserPage;