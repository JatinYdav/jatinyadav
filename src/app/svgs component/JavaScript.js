import * as React from "react";

function JavaScript(props) {
  return (
    <svg
      width="4.073125em"
      height="4.073125em"
      viewBox="0 0 66 66"
      fill="none"
      {...props}
    >
      <g clipPath="url(#prefix__clip0_41_14)">
        <path
          d="M50.332.106H15.71C7.274.106.435 6.944.435 15.38v34.622c0 8.436 6.84 15.275 15.275 15.275h34.622c8.436 0 15.274-6.839 15.274-15.275V15.38c0-8.436-6.838-15.274-15.274-15.274z"
          fill="#F0DB4F"
        />
        <path
          d="M17.571 54.567l4.988-3.018c.962 1.706 1.837 3.15 3.936 3.15 2.013 0 3.282-.788 3.282-3.85V30.026H35.9v20.91c0 6.343-3.718 9.23-9.143 9.23-4.9 0-7.743-2.537-9.187-5.6M39.228 53.911l4.986-2.887c1.313 2.144 3.02 3.719 6.038 3.719 2.537 0 4.156-1.27 4.156-3.02 0-2.099-1.663-2.843-4.463-4.067l-1.53-.657c-4.419-1.88-7.35-4.243-7.35-9.23 0-4.594 3.5-8.094 8.968-8.094 3.894 0 6.694 1.357 8.706 4.9l-4.769 3.063c-1.05-1.882-2.187-2.625-3.937-2.625-1.794 0-2.931 1.137-2.931 2.625 0 1.837 1.138 2.58 3.762 3.718l1.531.656c5.206 2.232 8.137 4.506 8.137 9.624 0 5.513-4.33 8.531-10.149 8.531-5.687 0-9.362-2.712-11.155-6.256z"
          fill="#323330"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_41_14">
          <path
            fill="#fff"
            transform="translate(.435 .106)"
            d="M0 0h65.171v65.171H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoJavaScript = React.memo(JavaScript);
export default MemoJavaScript;