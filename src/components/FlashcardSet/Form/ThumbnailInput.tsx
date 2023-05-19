import { X } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import {
  type DropzoneInputProps,
  type DropzoneRootProps,
} from "react-dropzone";

const UploadImage: React.FC = () => {
  return (
    <svg
      width="329"
      height="247"
      viewBox="0 0 329 247"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4_133)">
        <path
          d="M314.793 229.313H67.1628C63.3961 229.309 59.7848 227.808 57.1213 225.139C54.4578 222.47 52.9596 218.851 52.9553 215.077V82.6405C52.9596 78.8663 54.4578 75.2478 57.1213 72.579C59.7848 69.9101 63.3961 68.4089 67.1628 68.4047H314.793C318.559 68.4089 322.171 69.9101 324.834 72.579C327.498 75.2478 328.996 78.8663 329 82.6405V215.077C328.996 218.851 327.498 222.47 324.834 225.139C322.171 227.808 318.559 229.309 314.793 229.313Z"
          fill="#F8FAFC"
        />
        <path
          d="M314.793 229.313H67.1628C63.3961 229.309 59.7848 227.808 57.1213 225.139C54.4578 222.47 52.9596 218.851 52.9553 215.077V82.6405C52.9596 78.8663 54.4578 75.2478 57.1213 72.579C59.7848 69.9101 63.3961 68.4089 67.1628 68.4047H314.793C318.559 68.4089 322.171 69.9101 324.834 72.579C327.498 75.2478 328.996 78.8663 329 82.6405V215.077C328.996 218.851 327.498 222.47 324.834 225.139C322.171 227.808 318.559 229.309 314.793 229.313ZM67.1628 69.2674C63.6244 69.2715 60.232 70.6817 57.7299 73.1888C55.2278 75.6958 53.8204 79.095 53.8164 82.6405V215.077C53.8204 218.623 55.2278 222.022 57.7299 224.529C60.232 227.036 63.6244 228.446 67.1628 228.45H314.793C318.331 228.446 321.723 227.036 324.225 224.529C326.728 222.022 328.135 218.623 328.139 215.077V82.6405C328.135 79.095 326.728 75.6958 324.225 73.1888C321.723 70.6817 318.331 69.2715 314.793 69.2674H67.1628Z"
          fill="#F2F2F2"
        />
        <path
          d="M314.793 218.96H67.1629C66.1356 218.958 65.1507 218.549 64.4243 217.821C63.6979 217.093 63.2893 216.106 63.2881 215.077V82.6404C63.2893 81.6111 63.6979 80.6243 64.4243 79.8964C65.1507 79.1685 66.1356 78.7591 67.1629 78.7579H314.793C315.82 78.7591 316.805 79.1685 317.531 79.8964C318.258 80.6243 318.666 81.6111 318.667 82.6404V215.077C318.666 216.106 318.258 217.093 317.531 217.821C316.805 218.549 315.82 218.958 314.793 218.96ZM67.1629 79.6207C66.3639 79.6216 65.5978 79.94 65.0328 80.5062C64.4678 81.0723 64.15 81.8398 64.1491 82.6404V215.077C64.15 215.878 64.4678 216.645 65.0328 217.211C65.5978 217.778 66.3639 218.096 67.1629 218.097H314.793C315.592 218.096 316.358 217.778 316.923 217.211C317.488 216.645 317.805 215.878 317.806 215.077V82.6404C317.805 81.8398 317.488 81.0723 316.923 80.5062C316.358 79.94 315.592 79.6216 314.793 79.6207H67.1629Z"
          fill="#F2F2F2"
        />
        <path
          d="M251.768 219.591L12.4051 156.013C8.76521 155.042 5.65839 152.664 3.76628 149.4C1.87417 146.137 1.35128 142.254 2.31234 138.605L36.1793 10.5898C37.1485 6.94259 39.5221 3.82957 42.7791 1.93369C46.0362 0.037801 49.9108 -0.486126 53.5529 0.476851L292.916 64.054C296.555 65.0252 299.662 67.4035 301.554 70.6671C303.446 73.9306 303.969 77.813 303.008 81.4623L269.141 209.478C268.172 213.125 265.799 216.238 262.542 218.134C259.284 220.03 255.41 220.554 251.768 219.591Z"
          fill="#F2F2F2"
        />
        <path
          d="M251.768 219.591L12.4051 156.013C8.76521 155.042 5.65839 152.664 3.76628 149.4C1.87417 146.137 1.35128 142.254 2.31234 138.605L36.1793 10.5898C37.1485 6.94259 39.5221 3.82957 42.7791 1.93369C46.0362 0.037801 49.9108 -0.486126 53.5529 0.476851L292.916 64.054C296.555 65.0252 299.662 67.4035 301.554 70.6671C303.446 73.9306 303.969 77.813 303.008 81.4623L269.141 209.478C268.172 213.125 265.799 216.238 262.542 218.134C259.284 220.03 255.41 220.554 251.768 219.591ZM53.3322 1.31083C49.9109 0.40623 46.2711 0.89841 43.2114 2.67939C40.1518 4.46037 37.9221 7.38471 37.0116 10.8108L3.14466 138.826C2.24187 142.254 2.73307 145.901 4.5105 148.967C6.28794 152.033 9.20645 154.267 12.6258 155.179L251.988 218.757C255.41 219.661 259.05 219.169 262.109 217.388C265.169 215.607 267.399 212.683 268.309 209.257L302.176 81.2412C303.079 77.813 302.588 74.166 300.81 71.1002C299.033 68.0345 296.114 65.8004 292.695 64.888L53.3322 1.31083Z"
          fill="#E6E6E6"
        />
        <path
          d="M254.416 209.583L15.0528 146.006C14.0601 145.741 13.2128 145.092 12.6968 144.202C12.1808 143.312 12.0382 142.253 12.3003 141.258L46.1672 13.2427C46.4315 12.248 47.0789 11.399 47.9671 10.8819C48.8554 10.3649 49.9121 10.222 50.9054 10.4846L290.268 74.0618C291.261 74.3267 292.108 74.9753 292.624 75.8653C293.14 76.7554 293.283 77.8142 293.021 78.8095L259.154 206.825C258.889 207.819 258.242 208.668 257.354 209.186C256.465 209.703 255.409 209.845 254.416 209.583ZM50.6848 11.3186C49.9122 11.1143 49.0903 11.2254 48.3994 11.6276C47.7086 12.0297 47.2051 12.6901 46.9995 13.4637L13.1326 141.479C12.9287 142.253 13.0396 143.077 13.441 143.769C13.8423 144.461 14.5014 144.966 15.2735 145.172L254.636 208.749C255.409 208.953 256.231 208.842 256.921 208.44C257.612 208.038 258.116 207.377 258.321 206.604L292.188 78.5884C292.392 77.8143 292.281 76.9908 291.88 76.2985C291.479 75.6062 290.82 75.1017 290.047 74.8957L50.6848 11.3186Z"
          fill="#F8FAFC"
        />
        <path
          d="M261.837 247H14.2075C10.4408 246.996 6.82949 245.494 4.16599 242.826C1.50248 240.157 0.00425493 236.538 0 232.764V100.327C0.00425493 96.5531 1.50248 92.9347 4.16599 90.2658C6.82949 87.597 10.4408 86.0958 14.2075 86.0916H261.837C265.604 86.0958 269.215 87.597 271.879 90.2658C274.542 92.9347 276.04 96.5531 276.045 100.327V232.764C276.04 236.538 274.542 240.157 271.879 242.826C269.215 245.494 265.604 246.996 261.837 247Z"
          fill="#F8FAFC"
        />
        <path
          d="M194.559 235.784H34.6466C34.4464 235.785 34.2464 235.78 34.0491 235.768L109.68 193.089C111.12 192.26 114.351 191.968 116.897 192.437C117.595 192.545 118.271 192.765 118.898 193.089L169.656 221.73L172.088 223.101L194.559 235.784Z"
          fill="#E6E6E6"
        />
        <path
          d="M245.009 235.784H106.698L133.5 223.101L135.429 222.187L170.354 205.659C172.644 204.576 178.152 204.508 180.845 205.454C181.025 205.519 181.193 205.587 181.347 205.659L245.009 235.784Z"
          fill="#E6E6E6"
        />
        <path
          d="M14.2075 86.9543C10.6691 86.9584 7.27668 88.3686 4.7746 90.8757C2.27252 93.3827 0.865096 96.7819 0.861084 100.327V232.764C0.865096 236.31 2.27252 239.709 4.7746 242.216C7.27668 244.723 10.6691 246.133 14.2075 246.137H261.837C265.376 246.133 268.768 244.723 271.27 242.216C273.772 239.709 275.18 236.31 275.184 232.764V100.327C275.18 96.7819 273.772 93.3827 271.27 90.8757C268.768 88.3686 265.376 86.9584 261.837 86.9543H14.2075Z"
          fill="#292524"
        />
        <path
          d="M261.837 236.647H14.2075C13.1802 236.645 12.1954 236.236 11.469 235.508C10.7426 234.78 10.3339 233.793 10.3328 232.764V100.327C10.3339 99.2981 10.7426 98.3113 11.469 97.5834C12.1954 96.8556 13.1802 96.4461 14.2075 96.4449H261.837C262.864 96.4461 263.849 96.8556 264.576 97.5834C265.302 98.3113 265.711 99.2981 265.712 100.327V232.764C265.711 233.793 265.302 234.78 264.576 235.508C263.849 236.236 262.864 236.645 261.837 236.647ZM14.2075 97.3077C13.4085 97.3086 12.6425 97.6271 12.0775 98.1932C11.5125 98.7593 11.1947 99.5268 11.1938 100.327V232.764C11.1947 233.565 11.5125 234.332 12.0775 234.898C12.6425 235.465 13.4085 235.783 14.2075 235.784H261.837C262.636 235.783 263.402 235.465 263.967 234.898C264.532 234.332 264.85 233.565 264.851 232.764V100.327C264.85 99.5268 264.532 98.7593 263.967 98.1932C263.402 97.6271 262.636 97.3086 261.837 97.3077H14.2075Z"
          fill="#CCCCCC"
        />
        <path
          d="M206.662 120.686C221.381 120.686 233.313 108.73 233.313 93.982C233.313 79.2335 221.381 67.2776 206.662 67.2776C191.943 67.2776 180.011 79.2335 180.011 93.982C180.011 108.73 191.943 120.686 206.662 120.686Z"
          fill="#1E3A8A"
        />
        <path
          d="M217.804 191.208C236.446 191.208 251.559 172.253 251.559 148.872C251.559 125.491 236.446 106.537 217.804 106.537C199.161 106.537 184.049 125.491 184.049 148.872C184.049 172.253 199.161 191.208 217.804 191.208Z"
          fill="#F2F2F2"
        />
        <path
          d="M217.897 140.359H217.989L219.659 236.251H216.135L217.897 140.359Z"
          fill="#CCCCCC"
        />
        <path
          d="M223.654 203.842C223.757 204.039 223.778 204.268 223.713 204.48C223.647 204.692 223.5 204.869 223.304 204.972L218.463 207.526L217.685 206.046L222.527 203.492C222.722 203.389 222.951 203.368 223.163 203.433C223.374 203.499 223.551 203.646 223.654 203.842Z"
          fill="#CCCCCC"
        />
        <path
          d="M120.759 191.208C139.402 191.208 154.514 172.253 154.514 148.872C154.514 125.491 139.402 106.537 120.759 106.537C102.117 106.537 87.0044 125.491 87.0044 148.872C87.0044 172.253 102.117 191.208 120.759 191.208Z"
          fill="#F2F2F2"
        />
        <path
          d="M126.61 205.428C126.506 205.232 126.33 205.084 126.118 205.019C125.907 204.953 125.678 204.974 125.482 205.077L122.102 206.86L120.945 140.359H120.852L119.09 236.251H122.614L122.135 208.733L126.26 206.557C126.456 206.454 126.603 206.277 126.668 206.065C126.734 205.853 126.713 205.624 126.61 205.428Z"
          fill="#CCCCCC"
        />
        <path
          d="M169.164 51.3081C192.786 51.3081 211.986 95.9062 211.986 125.533C211.986 155.159 192.837 179.176 169.215 179.176C145.593 179.176 126.444 155.159 126.444 125.533C126.444 95.9062 145.542 51.3081 169.164 51.3081Z"
          fill="#3B82F6"
        />
        <path
          d="M176.627 196.763C176.563 196.64 176.474 196.531 176.368 196.442C176.261 196.353 176.138 196.286 176.005 196.245C175.872 196.204 175.733 196.189 175.595 196.202C175.456 196.215 175.322 196.255 175.199 196.319L170.916 198.579L169.45 114.314H169.332L167.1 235.819H171.565L170.958 200.952L176.184 198.195C176.307 198.13 176.416 198.041 176.505 197.934C176.594 197.827 176.661 197.704 176.702 197.571C176.743 197.438 176.757 197.298 176.745 197.16C176.732 197.021 176.692 196.886 176.627 196.763Z"
          fill="#292524"
        />
        <path
          d="M262.698 246.137H15.0686C11.3018 246.133 7.69057 244.632 5.02707 241.963C2.36356 239.294 0.865339 235.676 0.861084 231.901V99.4646C0.865339 95.6903 2.36356 92.0719 5.02707 89.4031C7.69057 86.7342 11.3018 85.233 15.0686 85.2288H262.698C266.465 85.233 270.076 86.7342 272.74 89.4031C275.403 92.0719 276.902 95.6903 276.906 99.4646V231.901C276.902 235.676 275.403 239.294 272.74 241.963C270.076 244.632 266.465 246.133 262.698 246.137Z"
          fill="#F8FAFC"
        />
        <path
          d="M195.42 234.921H35.5077C35.3075 234.922 35.1075 234.917 34.9102 234.906L110.541 192.227C111.981 191.397 115.212 191.106 117.758 191.575C118.456 191.682 119.132 191.902 119.759 192.227L170.517 220.868L172.949 222.238L195.42 234.921Z"
          fill="#E6E6E6"
        />
        <path
          d="M245.87 234.921H107.56L134.361 222.238L136.29 221.324L171.216 204.796C173.505 203.713 179.014 203.645 181.706 204.592C181.886 204.656 182.054 204.724 182.209 204.796L245.87 234.921Z"
          fill="#E6E6E6"
        />
        <path
          d="M262.698 246.137H15.0686C11.3018 246.133 7.69057 244.632 5.02707 241.963C2.36356 239.294 0.865339 235.676 0.861084 231.901V99.4646C0.865339 95.6903 2.36356 92.0719 5.02707 89.4031C7.69057 86.7342 11.3018 85.233 15.0686 85.2288H262.698C266.465 85.233 270.076 86.7342 272.74 89.4031C275.403 92.0719 276.902 95.6903 276.906 99.4646V231.901C276.902 235.676 275.403 239.294 272.74 241.963C270.076 244.632 266.465 246.133 262.698 246.137ZM15.0686 86.0915C11.5301 86.0956 8.13774 87.5058 5.63566 90.0129C3.13359 92.5199 1.72616 95.9191 1.72215 99.4646V231.901C1.72616 235.447 3.13359 238.846 5.63566 241.353C8.13774 243.86 11.5301 245.27 15.0686 245.274H262.698C266.237 245.27 269.629 243.86 272.131 241.353C274.633 238.846 276.041 235.447 276.045 231.901V99.4646C276.041 95.9191 274.633 92.5199 272.131 90.0129C269.629 87.5058 266.237 86.0956 262.698 86.0915H15.0686Z"
          fill="#292524"
        />
        <path
          d="M262.698 235.784H15.0686C14.0413 235.783 13.0564 235.373 12.33 234.645C11.6036 233.918 11.195 232.931 11.1938 231.901V99.4647C11.195 98.4353 11.6036 97.4485 12.33 96.7206C13.0564 95.9928 14.0413 95.5833 15.0686 95.5822H262.698C263.726 95.5833 264.71 95.9928 265.437 96.7206C266.163 97.4485 266.572 98.4353 266.573 99.4647V231.901C266.572 232.931 266.163 233.918 265.437 234.645C264.71 235.373 263.726 235.783 262.698 235.784ZM15.0686 96.4449C14.2696 96.4458 13.5036 96.7643 12.9386 97.3304C12.3736 97.8965 12.0558 98.6641 12.0549 99.4647V231.901C12.0558 232.702 12.3736 233.469 12.9386 234.036C13.5036 234.602 14.2696 234.92 15.0686 234.921H262.698C263.497 234.92 264.263 234.602 264.828 234.036C265.393 233.469 265.711 232.702 265.712 231.901V99.4647C265.711 98.6641 265.393 97.8965 264.828 97.3304C264.263 96.7643 263.497 96.4458 262.698 96.4449H15.0686Z"
          fill="#CCCCCC"
        />
        <path
          d="M207.523 119.824C222.242 119.824 234.174 107.868 234.174 93.1192C234.174 78.3708 222.242 66.4148 207.523 66.4148C192.804 66.4148 180.872 78.3708 180.872 93.1192C180.872 107.868 192.804 119.824 207.523 119.824Z"
          fill="#1E3A8A"
        />
        <path
          d="M218.665 190.345C237.307 190.345 252.42 171.391 252.42 148.009C252.42 124.628 237.307 105.674 218.665 105.674C200.023 105.674 184.91 124.628 184.91 148.009C184.91 171.391 200.023 190.345 218.665 190.345Z"
          fill="#F2F2F2"
        />
        <path
          d="M218.758 139.496H218.851L220.52 235.388H216.996L218.758 139.496Z"
          fill="#CCCCCC"
        />
        <path
          d="M224.515 202.98C224.618 203.176 224.639 203.405 224.574 203.617C224.508 203.829 224.361 204.006 224.165 204.109L219.324 206.663L218.546 205.183L223.388 202.629C223.584 202.526 223.812 202.505 224.024 202.571C224.235 202.636 224.412 202.783 224.515 202.98Z"
          fill="#CCCCCC"
        />
        <path
          d="M121.62 190.345C140.263 190.345 155.375 171.391 155.375 148.009C155.375 124.628 140.263 105.674 121.62 105.674C102.978 105.674 87.8655 124.628 87.8655 148.009C87.8655 171.391 102.978 190.345 121.62 190.345Z"
          fill="#F2F2F2"
        />
        <path
          d="M127.471 204.565C127.368 204.369 127.191 204.222 126.979 204.156C126.768 204.09 126.539 204.111 126.343 204.215L122.963 205.998L121.806 139.496H121.713L119.951 235.388H123.475L122.996 207.871L127.121 205.695C127.317 205.591 127.464 205.414 127.529 205.202C127.595 204.991 127.574 204.761 127.471 204.565Z"
          fill="#CCCCCC"
        />
        <path
          d="M170.025 50.4453C193.647 50.4453 212.847 95.0434 212.847 124.67C212.847 154.296 193.698 178.313 170.076 178.313C146.454 178.313 127.305 154.296 127.305 124.67C127.305 95.0434 146.403 50.4453 170.025 50.4453Z"
          fill="#3B82F6"
        />
        <path
          d="M177.488 195.901C177.424 195.777 177.335 195.668 177.229 195.579C177.122 195.49 176.999 195.423 176.866 195.382C176.733 195.341 176.594 195.326 176.456 195.339C176.317 195.352 176.183 195.392 176.06 195.457L171.778 197.716L170.311 113.452H170.193L167.961 234.957H172.426L171.819 200.089L177.045 197.332C177.168 197.267 177.277 197.179 177.366 197.072C177.455 196.965 177.522 196.841 177.563 196.708C177.604 196.575 177.619 196.436 177.606 196.297C177.593 196.158 177.553 196.024 177.488 195.901Z"
          fill="#292524"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_133">
          <rect width="329" height="247" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

type Props = {
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  handleRemoveThumbnail: (e: React.MouseEvent) => void;
  previewThumbnail: string | ArrayBuffer | null;
};

export const ThumbnailInput: React.FC<Props> = ({
  getRootProps,
  getInputProps,
  handleRemoveThumbnail,
  previewThumbnail,
}) => {
  return (
    <div
      className="relative flex h-full max-h-80 flex-col items-center justify-center rounded-3xl bg-blue-200 p-4 shadow"
      {...getRootProps()}
    >
      <input type="image" {...getInputProps()} />
      {previewThumbnail ? (
        <>
          <button
            className="absolute right-4 top-4 flex cursor-pointer items-center justify-center text-blue-500 hover:text-blue-600"
            onClick={handleRemoveThumbnail}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Remove thumbnail</span>
          </button>
          <div className="relative aspect-video h-96">
            <Image
              className="rounded-2xl border border-blue-500"
              src={previewThumbnail.toString()}
              alt="Thumbnail"
              fill
            />
          </div>
        </>
      ) : (
        <>
          <UploadImage />

          <input {...getInputProps()} data-cy="input-thumbnail" />

          <h3 className="my-1 text-center font-semibold text-blue-500">
            Upload a image
          </h3>
          <p className="text-center text-sm text-blue-500">
            or drag and drop PNG, JPG, GIF up to 25MB
          </p>
        </>
      )}
    </div>
  );
};
