import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <div
        class="appBottomMenu"
        // style="position: relative; z-index: 0; padding-bottom: 0;"
      >
        <a href="#" class="item active">
          <div class="col">
            <ion-icon name="pulse-outline"></ion-icon>
            <strong>Item 1</strong>
          </div>
        </a>
        <a href="#" class="item">
          <div class="col">
            <ion-icon name="card-outline"></ion-icon>
            <strong>Item 2</strong>
          </div>
        </a>
        <a href="#" class="item">
          <div class="col">
            <ion-icon name="cash-outline"></ion-icon>
            <strong>Item 3</strong>
          </div>
        </a>
        <a href="#" class="item">
          <div class="col">
            <ion-icon name="calendar-outline"></ion-icon>
            <strong>Item 4</strong>
          </div>
        </a>
        <a href="javascript:;" class="item">
          <div class="col">
            <ion-icon name="settings-outline"></ion-icon>
            <strong>Item 5</strong>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
