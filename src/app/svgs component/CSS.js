import * as React from "react";

function CSS(props) {
  return (
    <svg width="4.073125em" height="4.073125em" viewBox="0 0 67 66" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_41_66)">
        <path
          d="M50.811.812H16.19C7.753.812.914 7.65.914 16.086v34.622c0 8.436 6.84 15.275 15.275 15.275h34.622c8.436 0 15.275-6.839 15.275-15.275V16.086C66.086 7.65 59.247.812 50.81.812z"
          fill="#0277BD"
        />
        <path
          d="M14.598 26.944l.73 8.132h18.196v-8.132H14.6zM33.524 10.486H13.134l.74 8.131h19.65v-8.131zM33.524 56.523v-8.46l-.035.01-9.057-2.446-.578-6.486H15.69L16.83 51.91l16.657 4.624.037-.01z"
          fill="#EBEBEB"
        />
        <path
          d="M43.51 35.076l-.945 10.546-9.069 2.448v8.46l16.67-4.62.123-1.374 1.91-21.408.199-2.184 1.468-16.458h-20.37v8.131h11.458l-.74 8.327H33.497v8.132H43.51z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_41_66">
          <path
            fill="#fff"
            transform="translate(.914 .812)"
            d="M0 0h65.171v65.171H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoCSS = React.memo(CSS);
export default MemoCSS;
