import * as React from "react";

function Instagramlogo(props) {
  return (
    <svg
      width="3.8em"
      height="3.8em"
      viewBox="0 0 68 69"
      fill="none"
      {...props}
    >
      <path
        d="M51 5.03H17c-7.042 0-12.75 5.709-12.75 12.75v34c0 7.042 5.708 12.75 12.75 12.75h34c7.042 0 12.75-5.708 12.75-12.75v-34c0-7.041-5.708-12.75-12.75-12.75z"
        fill="url(#prefix__paint0_radial_12_10)"
      />
      <path
        d="M51 5.03H17c-7.042 0-12.75 5.709-12.75 12.75v34c0 7.042 5.708 12.75 12.75 12.75h34c7.042 0 12.75-5.708 12.75-12.75v-34c0-7.041-5.708-12.75-12.75-12.75z"
        fill="url(#prefix__paint1_radial_12_10)"
      />
      <path
        d="M51 5.03H17c-7.042 0-12.75 5.709-12.75 12.75v34c0 7.042 5.708 12.75 12.75 12.75h34c7.042 0 12.75-5.708 12.75-12.75v-34c0-7.041-5.708-12.75-12.75-12.75z"
        fill="url(#prefix__paint2_radial_12_10)"
      />
      <path
        d="M48.875 23.093a3.188 3.188 0 11-6.375 0 3.188 3.188 0 016.375 0z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 45.406c5.868 0 10.625-4.758 10.625-10.625 0-5.868-4.757-10.625-10.625-10.625S23.375 28.913 23.375 34.78c0 5.867 4.757 10.625 10.625 10.625zm0-4.25a6.375 6.375 0 100-12.75 6.375 6.375 0 000 12.75z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.75 33.93c0-7.14 0-10.71 1.39-13.438a12.749 12.749 0 015.572-5.572c2.727-1.39 6.297-1.39 13.438-1.39h1.7c7.14 0 10.711 0 13.438 1.39a12.749 12.749 0 015.572 5.572c1.39 2.727 1.39 6.298 1.39 13.439v1.7c0 7.14 0 10.71-1.39 13.438a12.749 12.749 0 01-5.572 5.572c-2.727 1.39-6.297 1.39-13.438 1.39h-1.7c-7.14 0-10.711 0-13.438-1.39a12.749 12.749 0 01-5.572-5.572c-1.39-2.727-1.39-6.298-1.39-13.439v-1.7zm20.4-16.15h1.7c3.64 0 6.115.004 8.028.16 1.864.152 2.816.428 3.481.767a8.5 8.5 0 013.715 3.715c.338.664.614 1.617.766 3.48.157 1.913.16 4.388.16 8.029v1.7c0 3.64-.003 6.115-.16 8.027-.152 1.864-.428 2.817-.767 3.481a8.5 8.5 0 01-3.714 3.715c-.665.339-1.617.615-3.481.767-1.913.156-4.388.16-8.028.16h-1.7c-3.64 0-6.115-.004-8.028-.16-1.863-.152-2.816-.428-3.481-.767a8.501 8.501 0 01-3.715-3.715c-.338-.664-.614-1.617-.766-3.48-.157-1.913-.16-4.388-.16-8.029v-1.7c0-3.64.003-6.115.16-8.028.152-1.863.428-2.816.766-3.48a8.501 8.501 0 013.715-3.715c.665-.339 1.618-.615 3.481-.767 1.913-.156 4.387-.16 8.028-.16z"
        fill="#fff"
      />
      <defs>
        <radialGradient
          id="prefix__paint0_radial_12_10"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-55.376 60.064 .53) scale(54.2292)"
        >
          <stop stopColor="#B13589" />
          <stop offset={0.793} stopColor="#C62F94" />
          <stop offset={1} stopColor="#8A3AC8" />
        </radialGradient>
        <radialGradient
          id="prefix__paint1_radial_12_10"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-65.136 63.865 15.03) scale(48.0127)"
        >
          <stop stopColor="#E0E8B7" />
          <stop offset={0.445} stopColor="#FB8A2E" />
          <stop offset={0.715} stopColor="#E2425C" />
          <stop offset={1} stopColor="#E2425C" stopOpacity={0} />
        </radialGradient>
        <radialGradient
          id="prefix__paint2_radial_12_10"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-8.13 50.874 -3.898) scale(82.6432 17.6765)"
        >
          <stop offset={0.157} stopColor="#406ADC" />
          <stop offset={0.468} stopColor="#6A45BE" />
          <stop offset={1} stopColor="#6A45BE" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
}

const MemoInstagramlogo = React.memo(Instagramlogo);
export default MemoInstagramlogo;
