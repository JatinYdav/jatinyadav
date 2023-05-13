import * as React from "react";

function HTML(props) {
  return (
    <svg width="4.073125em" height="4.073125em" viewBox="0 0 66 66" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_41_18)">
        <path
          d="M50.572.812H15.949C7.514.812.675 7.65.675 16.086v34.622c0 8.436 6.839 15.275 15.274 15.275h34.623c8.435 0 15.274-6.839 15.274-15.275V16.086C65.846 7.65 59.007.812 50.572.812z"
          fill="#E14E1D"
        />
        <path
          d="M12.895 10.486l2.191 24.59H43.27l-.945 10.547-9.075 2.453-9.058-2.45-.605-6.772h-8.162l1.167 13.055 16.656 4.626 16.677-4.626 2.236-24.964H22.524l-.745-8.327h31.119l.728-8.132H12.895z"
          fill="#fff"
        />
        <path
          d="M33.26 10.486H12.896l2.191 24.59h18.175v-8.13H22.523l-.745-8.328h11.482v-8.132zM33.26 48.073l-.01.003-9.058-2.45-.605-6.772h-8.162l1.167 13.055 16.656 4.626.013-.003v-8.46z"
          fill="#EBEBEB"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_41_18">
          <path
            fill="#fff"
            transform="translate(.675 .812)"
            d="M0 0h65.171v65.171H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoHTML = React.memo(HTML);
export default MemoHTML;
