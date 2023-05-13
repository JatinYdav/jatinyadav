import * as React from "react";

function Twitterlogo(props) {
  return (
    <svg width="3.8em" height="3.8em" viewBox="0 0 60 61" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_12_7)">
        <path
          d="M51 .78H9a9 9 0 00-9 9v42a9 9 0 009 9h42a9 9 0 009-9v-42a9 9 0 00-9-9z"
          fill="#1DA1F2"
        />
        <path
          d="M51.21 18.593a8.437 8.437 0 01-4.687 1.406 8.437 8.437 0 003.75-4.687A8.437 8.437 0 0145 17.304a8.438 8.438 0 00-14.297 7.617 23.44 23.44 0 01-16.992-8.672 8.438 8.438 0 002.578 11.016 8.438 8.438 0 01-3.75-.82 8.437 8.437 0 006.563 8.086 8.437 8.437 0 01-3.75.117 8.437 8.437 0 007.851 5.86 23.438 23.438 0 01-12.305 3.398A23.437 23.437 0 0047.11 22.929a23.435 23.435 0 004.102-4.336z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_12_7">
          <path fill="#fff" transform="translate(0 .78)" d="M0 0h60v60H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoTwitterlogo = React.memo(Twitterlogo);
export default MemoTwitterlogo;
