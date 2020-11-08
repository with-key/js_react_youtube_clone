import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoImg>
      <svg viewBox="0 0 240 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M232.466 30.9138C236.307 31.4675 238.619 35.4669 237.184 39.0722L219.047 84.6161C218.117 86.95 215.832 88.4578 213.321 88.3943L7.56202 83.1912C3.69771 83.0935 0.932799 79.4207 1.90763 75.68L20.1472 5.69093C20.9176 2.73489 23.7859 0.829548 26.8094 1.26543L232.466 30.9138Z"
          fill="#FFC905"
        />
        <path
          d="M25.945 66L32.74 33.87H40.93C44.35 33.87 47.02 34.59 48.94 36.03C50.86 37.44 51.82 39.66 51.82 42.69C51.82 44.52 51.505 46.08 50.875 47.37C50.245 48.66 49.42 49.725 48.4 50.565C47.38 51.375 46.3 52.005 45.16 52.455L50.92 66H42.64L38.23 53.94H36.07L33.55 66H25.945ZM38.815 47.955C40.375 47.955 41.65 47.58 42.64 46.83C43.66 46.05 44.17 44.82 44.17 43.14C44.17 42.15 43.87 41.37 43.27 40.8C42.7 40.2 41.77 39.9 40.48 39.9H39.04L37.375 47.955H38.815ZM64.7318 66.45C61.7318 66.45 59.3468 65.625 57.5768 63.975C55.8368 62.325 54.9668 59.925 54.9668 56.775C54.9668 54.735 55.2518 52.77 55.8218 50.88C56.4218 48.96 57.2918 47.25 58.4318 45.75C59.6018 44.25 61.0568 43.065 62.7968 42.195C64.5668 41.295 66.6068 40.845 68.9168 40.845C71.6768 40.845 73.7918 41.475 75.2618 42.735C76.7618 43.995 77.5118 45.63 77.5118 47.64C77.5118 50.31 76.3868 52.455 74.1368 54.075C71.8868 55.665 68.4068 56.46 63.6968 56.46H62.5268C62.4968 56.58 62.4818 56.7 62.4818 56.82C62.4818 56.91 62.4818 57.015 62.4818 57.135C62.4818 58.335 62.8268 59.265 63.5168 59.925C64.2068 60.585 65.1968 60.915 66.4868 60.915C67.7768 60.915 68.9618 60.75 70.0418 60.42C71.1218 60.09 72.3518 59.595 73.7318 58.935V64.38C72.4118 65.04 71.0618 65.55 69.6818 65.91C68.3318 66.27 66.6818 66.45 64.7318 66.45ZM64.1018 51.6C66.3518 51.6 67.9568 51.225 68.9168 50.475C69.8768 49.725 70.3568 48.885 70.3568 47.955C70.3568 46.695 69.6668 46.065 68.2868 46.065C67.5368 46.065 66.8168 46.32 66.1268 46.83C65.4368 47.34 64.8368 48.015 64.3268 48.855C63.8168 49.695 63.4718 50.61 63.2918 51.6H64.1018ZM89.4541 66.45C87.7741 66.45 86.2291 66.135 84.8191 65.505C83.4391 64.845 82.3291 63.81 81.4891 62.4C80.6791 60.99 80.2741 59.145 80.2741 56.865C80.2741 54.675 80.5591 52.62 81.1291 50.7C81.7291 48.75 82.5991 47.04 83.7391 45.57C84.8791 44.1 86.2591 42.945 87.8791 42.105C89.4991 41.265 91.3441 40.845 93.4141 40.845C94.9141 40.845 96.2641 40.995 97.4641 41.295C98.6941 41.565 99.8791 41.97 101.019 42.51L98.6791 48.135C97.8991 47.775 97.1041 47.475 96.2941 47.235C95.4841 46.965 94.6291 46.83 93.7291 46.83C92.7691 46.83 91.9141 47.13 91.1641 47.73C90.4441 48.3 89.8291 49.065 89.3191 50.025C88.8091 50.955 88.4341 51.975 88.1941 53.085C87.9541 54.195 87.8341 55.275 87.8341 56.325C87.8341 57.765 88.1191 58.815 88.6891 59.475C89.2591 60.105 90.0691 60.42 91.1191 60.42C92.1991 60.42 93.2191 60.255 94.1791 59.925C95.1691 59.565 96.1891 59.115 97.2391 58.575V64.605C96.1291 65.175 94.9591 65.625 93.7291 65.955C92.4991 66.285 91.0741 66.45 89.4541 66.45ZM110.971 38.55C109.921 38.55 109.036 38.34 108.316 37.92C107.596 37.47 107.236 36.72 107.236 35.67C107.236 34.29 107.626 33.24 108.406 32.52C109.186 31.8 110.281 31.44 111.691 31.44C112.681 31.44 113.536 31.65 114.256 32.07C115.006 32.49 115.381 33.24 115.381 34.32C115.381 35.58 115.021 36.6 114.301 37.38C113.581 38.16 112.471 38.55 110.971 38.55ZM100.981 66L106.201 41.295H113.716L108.451 66H100.981ZM112.392 76.8L119.907 41.295H125.757L125.442 44.58H125.622C126.342 43.53 127.227 42.645 128.277 41.925C129.327 41.205 130.572 40.845 132.012 40.845C133.992 40.845 135.672 41.58 137.052 43.05C138.432 44.52 139.122 46.8 139.122 49.89C139.122 51.9 138.852 53.895 138.312 55.875C137.802 57.825 137.052 59.61 136.062 61.23C135.072 62.82 133.887 64.095 132.507 65.055C131.127 65.985 129.567 66.45 127.827 66.45C126.507 66.45 125.427 66.135 124.587 65.505C123.777 64.845 123.072 64.02 122.472 63.03H122.292C122.202 64.23 122.082 65.355 121.932 66.405C121.782 67.485 121.557 68.775 121.257 70.275L119.862 76.8H112.392ZM126.432 60.42C127.152 60.42 127.812 60.135 128.412 59.565C129.042 58.965 129.582 58.185 130.032 57.225C130.482 56.235 130.842 55.155 131.112 53.985C131.382 52.785 131.517 51.6 131.517 50.43C131.517 48.06 130.707 46.875 129.087 46.875C128.217 46.875 127.452 47.22 126.792 47.91C126.132 48.57 125.592 49.425 125.172 50.475C124.752 51.525 124.437 52.62 124.227 53.76C124.017 54.9 123.912 55.935 123.912 56.865C123.912 57.945 124.137 58.815 124.587 59.475C125.037 60.105 125.652 60.42 126.432 60.42ZM151.478 38.55C150.428 38.55 149.543 38.34 148.823 37.92C148.103 37.47 147.743 36.72 147.743 35.67C147.743 34.29 148.133 33.24 148.913 32.52C149.693 31.8 150.788 31.44 152.198 31.44C153.188 31.44 154.043 31.65 154.763 32.07C155.513 32.49 155.888 33.24 155.888 34.32C155.888 35.58 155.528 36.6 154.808 37.38C154.088 38.16 152.978 38.55 151.478 38.55ZM141.488 66L146.708 41.295H154.223L148.958 66H141.488ZM163.429 66.45C162.199 66.45 161.044 66.15 159.964 65.55C158.914 64.95 158.059 63.99 157.399 62.67C156.769 61.32 156.454 59.52 156.454 57.27C156.454 55.5 156.694 53.655 157.174 51.735C157.654 49.815 158.374 48.03 159.334 46.38C160.294 44.73 161.464 43.395 162.844 42.375C164.254 41.355 165.859 40.845 167.659 40.845C169.159 40.845 170.374 41.175 171.304 41.835C172.264 42.465 173.029 43.32 173.599 44.4H173.779L174.994 41.295H180.889L175.624 66H169.819L170.089 63.03H169.909C169.159 64.05 168.259 64.875 167.209 65.505C166.189 66.135 164.929 66.45 163.429 66.45ZM166.444 60.42C167.224 60.42 167.944 60.09 168.604 59.43C169.294 58.77 169.879 57.915 170.359 56.865C170.839 55.815 171.184 54.705 171.394 53.535C171.484 52.995 171.544 52.47 171.574 51.96C171.634 51.42 171.664 50.85 171.664 50.25C171.664 49.26 171.439 48.45 170.989 47.82C170.569 47.19 169.969 46.875 169.189 46.875C168.499 46.875 167.839 47.175 167.209 47.775C166.579 48.345 166.024 49.125 165.544 50.115C165.094 51.075 164.734 52.14 164.464 53.31C164.194 54.48 164.059 55.665 164.059 56.865C164.059 59.235 164.854 60.42 166.444 60.42ZM181.952 66L187.172 41.295H193.022L192.662 45.345H192.842C193.742 43.905 194.777 42.795 195.947 42.015C197.117 41.235 198.527 40.845 200.177 40.845C202.367 40.845 203.987 41.52 205.037 42.87C206.087 44.19 206.612 45.87 206.612 47.91C206.612 48.57 206.567 49.29 206.477 50.07C206.387 50.82 206.267 51.585 206.117 52.365L203.237 66H195.767L198.692 52.005C198.782 51.555 198.857 51.075 198.917 50.565C199.007 50.055 199.052 49.59 199.052 49.17C199.052 48.39 198.872 47.805 198.512 47.415C198.152 47.025 197.657 46.83 197.027 46.83C195.827 46.83 194.777 47.58 193.877 49.08C192.977 50.55 192.272 52.5 191.762 54.93L189.422 66H181.952Z"
          fill="white"
        />
      </svg>
    </LogoImg>
  );
};

const LogoImg = styled.div`
  width: 150px;
`;

export default Logo;
