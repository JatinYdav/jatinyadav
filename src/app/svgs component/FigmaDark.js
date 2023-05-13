import * as React from "react";

function FigmaDark(props) {
  return (
    <svg width="4.073125em" height="4.073125em" viewBox="0 0 66 66" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_41_88)">
        <path
          d="M50.572.106H15.949C7.514.106.675 6.944.675 15.38v34.622c0 8.436 6.839 15.275 15.274 15.275h34.623c8.435 0 15.274-6.839 15.274-15.275V15.38c0-8.436-6.839-15.274-15.274-15.274z"
          fill="#242938"
        />
        <mask
          id="prefix__a"
          style={{
            maskType: "luminance",
          }}
          maskUnits="userSpaceOnUse"
          x={16}
          y={7}
          width={35}
          height={52}
        >
          <path d="M50.154 7.234h-33.95v50.915h33.95V7.234z" fill="#fff" />
        </mask>
        <g mask="url(#prefix__a)">
          <path
            d="M24.693 58.149a8.489 8.489 0 008.486-8.486v-8.486h-8.486a8.49 8.49 0 00-8.486 8.486 8.489 8.489 0 008.486 8.486z"
            fill="#0ACF83"
          />
          <path
            d="M16.207 32.691a8.489 8.489 0 018.486-8.486h8.486v16.972h-8.486a8.489 8.489 0 01-8.486-8.486z"
            fill="#A259FF"
          />
          <path
            d="M16.207 15.72a8.489 8.489 0 018.486-8.486h8.486v16.971h-8.486a8.489 8.489 0 01-8.486-8.485z"
            fill="#F24E1E"
          />
          <path
            d="M33.179 7.234h8.486a8.489 8.489 0 018.486 8.486 8.49 8.49 0 01-8.486 8.485h-8.486V7.234z"
            fill="#FF7262"
          />
          <path
            d="M50.15 32.691a8.489 8.489 0 01-8.485 8.486 8.489 8.489 0 01-8.486-8.486 8.489 8.489 0 018.486-8.486 8.489 8.489 0 018.486 8.486z"
            fill="#1ABCFE"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0_41_88">
          <path
            fill="#fff"
            transform="translate(.675 .106)"
            d="M0 0h65.171v65.171H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoFigmaDark = React.memo(FigmaDark);
export default MemoFigmaDark;
