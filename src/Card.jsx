import image from "./assets/images/image-avatar.webp";

export default function Card() {
  return (
    <div className="flex h-[522px] w-[384px] flex-col items-center rounded-[20px] border-[1px] border-gray-950 bg-white drop-shadow-customShadow">
      <svg
        className="my-[24px] rounded-[10px]"
        xmlns="http://www.w3.org/2000/svg"
        width="336"
        height="200"
        fill="none"
        viewBox="0 0 336 201"
      >
        <g clipPath="url(#a)">
          <path fill="#F4D04E" d="M0 .5h336v200H0z" />
          <rect
            width="139"
            height="95"
            x="87.996"
            y="77.729"
            fill="#fff"
            rx="47.5"
            transform="rotate(-45 87.996 77.729)"
          />
          <rect
            width="139"
            height="95"
            x="54.055"
            y="77.729"
            fill="#111"
            rx="47.5"
            transform="rotate(-45 54.055 77.729)"
          />
          <path
            fill="#111"
            d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
          />
          <rect
            width="139"
            height="95"
            x="20.114"
            y="77.729"
            fill="#fff"
            rx="47.5"
            transform="rotate(-45 20.114 77.729)"
          />
          <rect
            width="204.19"
            height="270.554"
            fill="#111"
            rx="102.095"
            transform="scale(-1 1) rotate(45 -103.887 14.564)"
          />
          <path
            stroke="#fff"
            strokeWidth="3"
            d="m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5"
          />
          <path
            stroke="#111"
            strokeWidth="3"
            d="M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873"
          />
          <path
            stroke="#111"
            strokeWidth="3"
            d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145"
          />
          <path
            stroke="#fff"
            strokeWidth="5"
            d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
          />
          <mask
            id="b"
            width="285"
            height="285"
            x="234"
            y="-8"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
          >
            <path
              fill="#111"
              d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
            />
          </mask>
          <g stroke="#fff" mask="url(#b)">
            <path
              strokeWidth="3"
              d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145"
            />
            <path
              strokeWidth="5"
              d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
            />
          </g>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 .5h336v200H0z" />
          </clipPath>
        </defs>
      </svg>
      <div className="flex w-full flex-col items-start pl-[24px]">
        <span className="mb-3 flex h-[29px] w-[80px] items-center justify-center rounded bg-[#F4d04e] text-sm font-extrabold text-gray-950">
          Learning
        </span>
        <p className="font-figtree mb-3 text-[14px] font-medium leading-[21px] text-gray-950">
          Published 21 Dec 2023
        </p>
        <p className="font-figtree mb-3 text-[24px] font-extrabold leading-[36px] text-gray-950 hover:cursor-pointer hover:text-[#F4d04e]">
          HTML & CSS foundations{" "}
        </p>
        <p className="font-figtree mb-6 text-[16px] font-medium leading-[24px] text-gray-500">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center">
          <img
            src={image}
            alt="profile picture"
            className="mr-[12px] h-[32px]"
          />
          <p className="text-[14px] font-extrabold leading-[21px] text-gray-950">
            Greg Hooper
          </p>
        </div>
      </div>
    </div>
  );
}
