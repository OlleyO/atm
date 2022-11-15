const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="61px"
    height="42px"
  >
    <defs>
      <filter
        filterUnits="userSpaceOnUse"
        id="Filter_0"
        x="0px"
        y="0px"
        width="61px"
        height="54px"
      >
        <feOffset in="SourceAlpha" dx="0" dy="4" />
        <feGaussianBlur result="blurOut" stdDeviation="3.162" />
        <feFlood floodColor="rgb(0, 0, 0)" result="floodOut" />
        <feComposite operator="atop" in="floodOut" in2="blurOut" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="PSgrad_0" x1="0%" x2="35.837%" y1="93.358%" y2="0%">
        <stop offset="0%" stopColor="rgb(251,71,71)" stopOpacity="1" />
        <stop offset="100%" stopColor="rgb(201,66,245)" stopOpacity="1" />
      </linearGradient>
    </defs>
    <g filter="url(#Filter_0)">
      <path
        fillRule="evenodd"
        fill="rgb(255, 255, 255)"
        d="M44.514,31.591 L29.869,31.591 C29.524,31.591 29.339,31.195 29.561,30.936 C30.957,29.304 32.295,27.656 33.632,25.878 L49.814,5.149 C50.1,4.909 50.388,4.951 50.505,5.230 C50.821,5.982 50.996,6.806 50.996,7.671 L50.996,25.208 C50.996,28.734 48.94,31.591 44.514,31.591 ZM27.171,18.532 L10.541,39.843 C10.365,40.68 10.12,40.47 9.868,39.802 C9.317,38.865 8.999,37.778 8.999,36.617 L8.999,19.79 C8.999,15.554 11.901,12.696 15.481,12.696 L31.258,12.696 C31.603,12.696 31.789,13.95 31.565,13.353 C30.82,15.69 28.651,16.729 27.171,18.532 Z"
      />
    </g>
    <path
      fill="url(#PSgrad_0)"
      d="M44.514,31.591 L29.869,31.591 C29.524,31.591 29.339,31.195 29.561,30.936 C30.957,29.304 32.295,27.656 33.632,25.878 L49.814,5.149 C50.1,4.909 50.388,4.951 50.505,5.230 C50.821,5.982 50.996,6.806 50.996,7.671 L50.996,25.208 C50.996,28.734 48.94,31.591 44.514,31.591 ZM27.171,18.532 L10.541,39.843 C10.365,40.68 10.12,40.47 9.868,39.802 C9.317,38.865 8.999,37.778 8.999,36.617 L8.999,19.79 C8.999,15.554 11.901,12.696 15.481,12.696 L31.258,12.696 C31.603,12.696 31.789,13.95 31.565,13.353 C30.82,15.69 28.651,16.729 27.171,18.532 Z"
    />
  </svg>
);

export default Logo;
