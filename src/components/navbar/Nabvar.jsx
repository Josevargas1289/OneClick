import { useState } from "react";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import "../navbar/styled.css";

const Nabvar = () => {
  const [expanded, setExpanded] = useState(false);
  // console.log(expanded);

  const closeMenu = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const toggleChange = () => {
    setExpanded(false);
  };

  const navigate = useNavigate();

  const goContacto = () => {
    toggleChange();
    navigate("/contacto");
  };

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      collapseOnSelect
      expand="lg"
      className=" bg-white    border "
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="150"
            zoomAndPan="magnify"
            viewBox="0 0 319.5 139.500001"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
              <clipPath id="822f068a3a">
                <path
                  d="M 0.320312 55 L 15 55 L 15 97 L 0.320312 97 Z M 0.320312 55 "
                  clip-rule="nonzero"
                />
              </clipPath>
            </defs>
            <path
              fill="#5e17eb"
              d="M 61.070312 36.207031 C 61.476562 36.617188 61.984375 36.820312 62.492188 36.820312 L 74.699219 36.820312 C 75.207031 36.820312 75.714844 36.617188 76.121094 36.207031 L 79.476562 32.851562 C 80.496094 33.359375 81.613281 33.667969 82.835938 33.667969 C 86.800781 33.667969 89.953125 30.511719 89.953125 26.546875 C 89.953125 22.578125 86.800781 19.425781 82.835938 19.425781 C 78.867188 19.425781 75.714844 22.578125 75.714844 26.546875 C 75.714844 27.765625 76.019531 28.886719 76.527344 29.902344 L 73.882812 32.75 L 63.308594 32.75 L 56.390625 25.835938 L 56.390625 12.410156 L 62.289062 12.410156 C 62.492188 12.410156 62.695312 12.511719 62.898438 12.410156 C 81.003906 11.695312 99.617188 19.933594 108.667969 36.820312 L 101.855469 36.820312 C 100.9375 33.871094 98.292969 31.734375 95.039062 31.734375 C 91.074219 31.734375 87.921875 34.886719 87.921875 38.851562 C 87.921875 42.109375 90.054688 44.753906 93.003906 45.667969 L 93.003906 64.28125 L 77.75 64.28125 C 76.628906 64.28125 75.714844 65.195312 75.714844 66.316406 L 75.714844 77.503906 L 71.648438 77.503906 L 71.648438 65.296875 C 71.648438 64.6875 71.339844 64.179688 70.933594 63.773438 L 64.527344 58.28125 L 64.527344 44.957031 L 72.867188 44.957031 L 75.613281 47.703125 C 75.105469 48.71875 74.800781 49.839844 74.800781 51.058594 C 74.800781 55.023438 77.953125 58.179688 81.917969 58.179688 C 85.886719 58.179688 89.039062 55.023438 89.039062 51.058594 C 89.039062 47.09375 85.886719 43.9375 81.917969 43.9375 C 80.699219 43.9375 79.582031 44.242188 78.5625 44.753906 L 75.207031 41.394531 C 74.699219 41.089844 74.191406 40.886719 73.679688 40.886719 L 62.492188 40.886719 C 61.375 40.886719 60.457031 41.804688 60.457031 42.921875 L 60.457031 59.195312 C 60.457031 59.804688 60.765625 60.3125 61.171875 60.722656 L 67.578125 66.214844 L 67.578125 77.503906 L 59.441406 77.503906 C 58.933594 77.503906 58.425781 77.707031 58.019531 78.113281 L 41.746094 94.386719 C 41.335938 94.792969 41.132812 95.300781 41.132812 95.808594 L 41.132812 112.390625 C 38.183594 113.304688 36.046875 115.949219 36.046875 119.203125 C 36.046875 123.171875 39.203125 126.324219 43.167969 126.324219 C 47.136719 126.324219 50.289062 123.171875 50.289062 119.203125 C 50.289062 115.949219 48.152344 113.304688 45.203125 112.390625 L 45.203125 96.625 L 60.253906 81.570312 L 97.074219 81.570312 C 97.886719 81.570312 98.601562 81.164062 98.90625 80.453125 L 105.007812 68.246094 C 105.109375 67.941406 105.210938 67.636719 105.210938 67.332031 L 105.210938 60.210938 L 114.160156 60.210938 L 114.160156 68.550781 L 111.515625 74.351562 C 111.3125 74.859375 111.3125 75.367188 111.414062 75.875 L 120.367188 99.777344 C 120.367188 99.878906 120.367188 99.980469 120.367188 100.082031 C 120.265625 100.183594 120.265625 100.183594 120.164062 100.183594 L 111.414062 100.183594 C 110.804688 100.183594 110.195312 100.488281 109.789062 100.996094 C 109.382812 101.507812 109.28125 102.21875 109.484375 102.828125 L 111.921875 109.949219 L 107.246094 111.574219 C 106.636719 111.777344 106.125 112.289062 105.921875 112.898438 C 105.71875 113.507812 105.820312 114.21875 106.226562 114.726562 L 109.28125 118.898438 L 106.636719 120.933594 C 106.125 121.339844 105.820312 121.949219 105.820312 122.558594 L 105.820312 127.746094 C 105.820312 130.085938 104.601562 132.324219 102.566406 133.441406 C 101.652344 134.054688 100.53125 134.359375 99.414062 134.359375 C 90.972656 134.460938 58.425781 123.78125 58.425781 105.980469 L 58.425781 101.710938 C 58.425781 100.589844 57.507812 99.675781 56.390625 99.675781 C 55.273438 99.675781 54.355469 100.589844 54.355469 101.710938 L 54.355469 105.980469 C 54.355469 127.644531 90.871094 138.527344 99.515625 138.527344 C 101.347656 138.527344 103.175781 138.019531 104.703125 137.105469 C 107.957031 135.171875 109.890625 131.714844 109.890625 127.847656 L 109.890625 123.578125 L 113.246094 120.933594 C 114.058594 120.222656 114.261719 119 113.652344 118.1875 L 111.109375 114.625 L 115.179688 113.203125 C 116.195312 112.796875 116.804688 111.675781 116.398438 110.660156 L 114.261719 104.253906 L 120.164062 104.253906 C 121.585938 104.253906 122.910156 103.539062 123.722656 102.421875 C 124.535156 101.199219 124.738281 99.675781 124.230469 98.351562 L 115.585938 75.265625 L 118.027344 69.875 C 118.128906 69.570312 118.230469 69.367188 118.230469 69.0625 L 118.230469 57.871094 C 117.621094 42.515625 111.3125 29.597656 100.125 20.445312 C 89.953125 12.105469 76.835938 7.933594 62.898438 8.339844 C 62.796875 8.339844 62.59375 8.339844 62.492188 8.339844 L 54.355469 8.339844 C 53.238281 8.339844 52.320312 9.257812 52.320312 10.375 L 52.320312 26.648438 C 52.320312 27.15625 52.527344 27.664062 52.933594 28.070312 Z M 114.058594 56.144531 L 103.175781 56.144531 C 102.058594 56.144531 101.140625 57.058594 101.140625 58.179688 L 101.140625 66.824219 L 95.855469 77.503906 L 79.785156 77.503906 L 79.785156 68.347656 L 95.039062 68.347656 C 96.160156 68.347656 97.074219 67.433594 97.074219 66.316406 L 97.074219 45.667969 C 99.414062 44.957031 101.140625 43.125 101.855469 40.886719 L 110.601562 40.886719 C 112.433594 45.464844 113.652344 50.550781 114.058594 56.144531 Z M 114.058594 56.144531 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill="#5e17eb"
              d="M 6.554688 22.273438 L 6.554688 39.871094 C 6.554688 40.480469 6.859375 41.089844 7.265625 41.496094 L 18.453125 50.449219 C 18.554688 50.550781 18.65625 50.550781 18.757812 50.652344 L 18.757812 72.417969 C 18.757812 72.925781 18.960938 73.332031 19.265625 73.738281 L 24.859375 80.25 L 24.859375 97.132812 C 21.910156 98.046875 19.773438 100.691406 19.773438 103.949219 C 19.773438 107.914062 22.929688 111.066406 26.894531 111.066406 C 30.863281 111.066406 34.015625 107.914062 34.015625 103.949219 C 34.015625 100.691406 31.878906 98.046875 28.929688 97.132812 L 28.929688 79.535156 C 28.929688 79.027344 28.726562 78.621094 28.421875 78.214844 L 22.828125 71.707031 L 22.828125 27.054688 L 32.996094 32.851562 L 32.996094 37.023438 C 30.046875 37.9375 27.910156 40.582031 27.910156 43.835938 C 27.910156 47.804688 31.066406 50.957031 35.03125 50.957031 C 39 50.957031 42.152344 47.804688 42.152344 43.835938 C 42.152344 40.582031 40.015625 37.9375 37.066406 37.023438 L 37.066406 31.734375 C 37.066406 31.023438 36.660156 30.308594 36.046875 30.003906 L 21.808594 21.867188 C 21.199219 21.460938 20.386719 21.460938 19.773438 21.867188 C 19.164062 22.273438 18.757812 22.886719 18.757812 23.597656 L 18.757812 45.464844 L 10.621094 38.851562 L 10.621094 22.273438 C 13.570312 21.359375 15.707031 18.714844 15.707031 15.460938 C 15.707031 11.492188 12.554688 8.339844 8.585938 8.339844 C 4.621094 8.339844 1.46875 11.492188 1.46875 15.460938 C 1.46875 18.714844 3.601562 21.359375 6.554688 22.273438 Z M 6.554688 22.273438 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill="#5e17eb"
              d="M 52.320312 40.683594 L 52.320312 70.484375 L 37.066406 85.742188 L 37.066406 71.09375 C 40.015625 70.179688 42.152344 67.535156 42.152344 64.28125 C 42.152344 60.3125 39 57.160156 35.03125 57.160156 C 31.066406 57.160156 27.910156 60.3125 27.910156 64.28125 C 27.910156 67.535156 30.046875 70.179688 32.996094 71.09375 L 32.996094 90.726562 C 32.996094 91.539062 33.507812 92.25 34.21875 92.554688 C 34.523438 92.757812 34.726562 92.757812 35.03125 92.757812 C 35.539062 92.757812 36.046875 92.554688 36.457031 92.148438 L 55.78125 72.824219 C 56.1875 72.417969 56.390625 71.910156 56.390625 71.398438 L 56.390625 39.871094 C 56.390625 39.363281 56.1875 38.851562 55.78125 38.445312 L 48.253906 30.921875 L 48.253906 15.460938 C 48.253906 14.339844 47.339844 13.425781 46.21875 13.425781 C 45.101562 13.425781 44.183594 14.339844 44.183594 15.460938 L 44.183594 31.734375 C 44.183594 32.242188 44.390625 32.75 44.796875 33.15625 Z M 52.320312 40.683594 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <g clip-path="url(#822f068a3a)">
              <path
                fill="#5e17eb"
                d="M 0.449219 89.707031 C 0.449219 93.675781 3.601562 96.828125 7.570312 96.828125 C 11.535156 96.828125 14.691406 93.675781 14.691406 89.707031 C 14.691406 86.453125 12.554688 83.808594 9.605469 82.894531 L 9.605469 69.0625 C 12.554688 68.144531 14.691406 65.5 14.691406 62.246094 C 14.691406 58.28125 11.535156 55.125 7.570312 55.125 C 3.601562 55.125 0.449219 58.28125 0.449219 62.246094 C 0.449219 65.5 2.585938 68.144531 5.535156 69.0625 L 5.535156 82.894531 C 2.585938 83.808594 0.449219 86.453125 0.449219 89.707031 Z M 0.449219 89.707031 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(124.879923, 63.872496)">
                <g>
                  <path d="M 6.226562 -26.480469 C 4.1875 -26.480469 2.449219 -24.742188 2.449219 -22.699219 L 2.449219 -3.777344 C 2.449219 -1.734375 4.1875 0 6.226562 0 L 20.046875 0 C 22.089844 0 23.824219 -1.734375 23.824219 -3.777344 L 23.824219 -22.699219 C 23.824219 -24.742188 22.089844 -26.480469 20.046875 -26.480469 Z M 7.65625 -23.007812 L 18.617188 -23.007812 C 19.5 -23.007812 20.214844 -22.328125 20.214844 -21.441406 L 20.214844 -5.039062 C 20.214844 -4.152344 19.5 -3.472656 18.617188 -3.472656 L 7.65625 -3.472656 C 6.773438 -3.472656 6.058594 -4.152344 6.058594 -5.039062 L 6.058594 -21.441406 C 6.058594 -22.328125 6.773438 -23.007812 7.65625 -23.007812 Z M 7.65625 -23.007812 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(151.118912, 63.872496)">
                <g>
                  <path d="M 2.449219 -18.921875 L 2.449219 0 L 5.75 0 L 5.75 -12.183594 C 5.75 -14.160156 7.386719 -15.757812 9.359375 -15.757812 L 13.886719 -15.757812 C 14.769531 -15.757812 15.519531 -14.976562 15.519531 -14.089844 L 15.519531 0 L 18.820312 0 L 18.820312 -15.113281 C 18.820312 -17.222656 17.152344 -18.921875 15.042969 -18.921875 L 10.3125 -18.921875 C 8.40625 -18.921875 6.535156 -17.800781 5.75 -15.929688 L 5.75 -18.921875 Z M 2.449219 -18.921875 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(172.355135, 63.872496)">
                <g>
                  <path d="M 6.226562 -18.921875 C 4.117188 -18.921875 2.449219 -17.222656 2.449219 -15.113281 L 2.449219 -3.777344 C 2.449219 -1.667969 4.117188 0 6.226562 0 L 15.042969 0 C 17.152344 0 18.820312 -1.667969 18.820312 -3.777344 L 18.820312 -5.855469 L 15.519531 -5.855469 L 15.519531 -4.800781 C 15.519531 -3.914062 14.769531 -3.132812 13.886719 -3.132812 L 7.386719 -3.132812 C 6.5 -3.132812 5.75 -3.914062 5.75 -4.800781 L 5.75 -7.929688 L 18.820312 -7.929688 L 18.820312 -15.113281 C 18.820312 -17.222656 17.152344 -18.921875 15.042969 -18.921875 Z M 5.75 -10.960938 L 5.75 -14.089844 C 5.75 -14.976562 6.5 -15.757812 7.386719 -15.757812 L 13.886719 -15.757812 C 14.769531 -15.757812 15.519531 -14.976562 15.519531 -14.089844 L 15.519531 -10.960938 Z M 5.75 -10.960938 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(193.591357, 63.872496)">
                <g />
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(203.698986, 63.872496)">
                <g>
                  <path d="M 6.226562 -26.480469 C 4.117188 -26.480469 2.449219 -24.8125 2.449219 -22.699219 L 2.449219 -3.777344 C 2.449219 -1.667969 4.117188 0 6.226562 0 L 20.046875 0 C 22.15625 0 23.824219 -1.667969 23.824219 -3.777344 L 23.824219 -6.226562 L 20.214844 -6.226562 L 20.214844 -5.039062 C 20.214844 -4.152344 19.5 -3.472656 18.617188 -3.472656 L 7.65625 -3.472656 C 6.773438 -3.472656 6.058594 -4.152344 6.058594 -5.039062 L 6.058594 -21.441406 C 6.058594 -22.328125 6.773438 -23.007812 7.65625 -23.007812 L 18.617188 -23.007812 C 19.5 -23.007812 20.214844 -22.328125 20.214844 -21.441406 L 20.214844 -20.25 L 23.824219 -20.25 L 23.824219 -22.699219 C 23.824219 -24.8125 22.15625 -26.480469 20.046875 -26.480469 Z M 6.226562 -26.480469 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(229.393452, 63.872496)">
                <g>
                  <path d="M 2.449219 -26.480469 L 2.449219 0 L 5.75 0 L 5.75 -26.480469 Z M 2.449219 -26.480469 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(237.561227, 63.872496)">
                <g>
                  <path d="M 2.417969 -18.921875 L 2.417969 0 L 5.71875 0 L 5.71875 -18.921875 Z M 2.179688 -26.480469 L 2.179688 -23.382812 L 5.988281 -23.382812 L 5.988281 -26.480469 Z M 2.179688 -26.480469 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(245.729002, 63.872496)">
                <g>
                  <path d="M 6.226562 -18.921875 C 4.117188 -18.921875 2.449219 -17.222656 2.449219 -15.113281 L 2.449219 -3.777344 C 2.449219 -1.667969 4.117188 0 6.226562 0 L 15.042969 0 C 17.152344 0 18.820312 -1.667969 18.820312 -3.777344 L 18.820312 -6.023438 L 15.519531 -6.023438 L 15.519531 -4.800781 C 15.519531 -3.914062 14.769531 -3.132812 13.886719 -3.132812 L 7.386719 -3.132812 C 6.5 -3.132812 5.75 -3.914062 5.75 -4.800781 L 5.75 -14.089844 C 5.75 -14.976562 6.5 -15.757812 7.386719 -15.757812 L 13.886719 -15.757812 C 14.769531 -15.757812 15.519531 -14.976562 15.519531 -14.089844 L 15.519531 -12.863281 L 18.820312 -12.863281 L 18.820312 -15.113281 C 18.820312 -17.222656 17.152344 -18.921875 15.042969 -18.921875 Z M 6.226562 -18.921875 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(266.522814, 63.872496)">
                <g>
                  <path d="M 2.449219 -26.480469 L 2.449219 0 L 5.75 0 L 5.75 -7.894531 L 11.640625 -7.894531 L 15.996094 0 L 19.570312 0 L 14.566406 -9.460938 L 19.570312 -18.921875 L 15.996094 -18.921875 L 11.640625 -11.027344 L 5.75 -11.027344 L 5.75 -26.480469 Z M 2.449219 -26.480469 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(131.349468, 85.751922)">
                <g>
                  <path d="M 5.140625 -9.90625 C 6.378906 -9.90625 7.398438 -9.648438 8.203125 -9.140625 C 9.003906 -8.640625 9.414062 -7.894531 9.4375 -6.90625 L 9.4375 -6.734375 L 6.515625 -6.734375 L 6.515625 -6.796875 C 6.515625 -7.078125 6.410156 -7.3125 6.203125 -7.5 C 5.992188 -7.6875 5.675781 -7.78125 5.25 -7.78125 C 4.832031 -7.78125 4.515625 -7.71875 4.296875 -7.59375 C 4.078125 -7.476562 3.96875 -7.332031 3.96875 -7.15625 C 3.96875 -6.894531 4.117188 -6.703125 4.421875 -6.578125 C 4.722656 -6.460938 5.207031 -6.335938 5.875 -6.203125 C 6.65625 -6.035156 7.296875 -5.863281 7.796875 -5.6875 C 8.304688 -5.519531 8.75 -5.238281 9.125 -4.84375 C 9.507812 -4.445312 9.707031 -3.910156 9.71875 -3.234375 C 9.71875 -2.078125 9.328125 -1.21875 8.546875 -0.65625 C 7.765625 -0.101562 6.722656 0.171875 5.421875 0.171875 C 3.898438 0.171875 2.71875 -0.0820312 1.875 -0.59375 C 1.03125 -1.101562 0.609375 -2.003906 0.609375 -3.296875 L 3.5625 -3.296875 C 3.5625 -2.804688 3.6875 -2.476562 3.9375 -2.3125 C 4.195312 -2.144531 4.597656 -2.0625 5.140625 -2.0625 C 5.535156 -2.0625 5.863281 -2.101562 6.125 -2.1875 C 6.382812 -2.28125 6.515625 -2.457031 6.515625 -2.71875 C 6.515625 -2.957031 6.367188 -3.132812 6.078125 -3.25 C 5.785156 -3.363281 5.316406 -3.488281 4.671875 -3.625 C 3.878906 -3.789062 3.222656 -3.96875 2.703125 -4.15625 C 2.179688 -4.34375 1.726562 -4.644531 1.34375 -5.0625 C 0.957031 -5.488281 0.765625 -6.066406 0.765625 -6.796875 C 0.765625 -7.859375 1.175781 -8.640625 2 -9.140625 C 2.820312 -9.648438 3.867188 -9.90625 5.140625 -9.90625 Z M 5.140625 -9.90625 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(141.567349, 85.751922)">
                <g>
                  <path d="M 4.71875 -7.640625 C 6.03125 -7.640625 7.0625 -7.304688 7.8125 -6.640625 C 8.5625 -5.972656 8.9375 -5.003906 8.9375 -3.734375 C 8.9375 -2.460938 8.5625 -1.492188 7.8125 -0.828125 C 7.0625 -0.160156 6.03125 0.171875 4.71875 0.171875 C 3.40625 0.171875 2.375 -0.15625 1.625 -0.8125 C 0.882812 -1.476562 0.515625 -2.453125 0.515625 -3.734375 C 0.515625 -5.015625 0.882812 -5.984375 1.625 -6.640625 C 2.375 -7.304688 3.40625 -7.640625 4.71875 -7.640625 Z M 4.71875 -5.734375 C 3.789062 -5.734375 3.328125 -5.203125 3.328125 -4.140625 L 3.328125 -3.328125 C 3.328125 -2.265625 3.789062 -1.734375 4.71875 -1.734375 C 5.644531 -1.734375 6.109375 -2.265625 6.109375 -3.328125 L 6.109375 -4.140625 C 6.109375 -5.203125 5.644531 -5.734375 4.71875 -5.734375 Z M 4.71875 -5.734375 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(151.006861, 85.751922)">
                <g>
                  <path d="M 0.953125 0 L 0.953125 -10.265625 L 3.765625 -10.265625 L 3.765625 0 Z M 0.953125 0 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(155.719539, 85.751922)">
                <g>
                  <path d="M 6.265625 0 L 6.09375 -1.125 C 5.789062 -0.726562 5.398438 -0.410156 4.921875 -0.171875 C 4.453125 0.0546875 3.953125 0.171875 3.421875 0.171875 C 2.554688 0.171875 1.90625 -0.0664062 1.46875 -0.546875 C 1.039062 -1.035156 0.828125 -1.734375 0.828125 -2.640625 L 0.828125 -7.46875 L 3.640625 -7.46875 L 3.640625 -2.96875 C 3.640625 -2.644531 3.722656 -2.382812 3.890625 -2.1875 C 4.054688 -2 4.289062 -1.90625 4.59375 -1.90625 C 4.9375 -1.90625 5.21875 -2.019531 5.4375 -2.25 C 5.65625 -2.476562 5.765625 -2.757812 5.765625 -3.09375 L 5.765625 -7.46875 L 8.578125 -7.46875 L 8.578125 0 Z M 6.265625 0 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(165.159051, 85.751922)">
                <g>
                  <path d="M 4.71875 -7.640625 C 5.9375 -7.640625 6.925781 -7.378906 7.6875 -6.859375 C 8.445312 -6.335938 8.828125 -5.535156 8.828125 -4.453125 L 6.09375 -4.453125 C 6.09375 -5.304688 5.632812 -5.734375 4.71875 -5.734375 C 3.789062 -5.734375 3.328125 -5.203125 3.328125 -4.140625 L 3.328125 -3.328125 C 3.328125 -2.265625 3.804688 -1.734375 4.765625 -1.734375 C 5.734375 -1.734375 6.21875 -2.171875 6.21875 -3.046875 L 8.828125 -3.046875 C 8.828125 -1.960938 8.445312 -1.15625 7.6875 -0.625 C 6.925781 -0.09375 5.9375 0.171875 4.71875 0.171875 C 3.40625 0.171875 2.375 -0.15625 1.625 -0.8125 C 0.882812 -1.476562 0.515625 -2.453125 0.515625 -3.734375 C 0.515625 -5.015625 0.882812 -5.984375 1.625 -6.640625 C 2.375 -7.304688 3.40625 -7.640625 4.71875 -7.640625 Z M 4.71875 -7.640625 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(174.598563, 85.751922)">
                <g>
                  <path d="M 0.953125 -8.359375 L 0.953125 -10.265625 L 3.765625 -10.265625 L 3.765625 -8.359375 Z M 0.953125 0 L 0.953125 -7.46875 L 3.765625 -7.46875 L 3.765625 0 Z M 0.953125 0 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(179.311242, 85.751922)">
                <g>
                  <path d="M 4.71875 -7.640625 C 6.03125 -7.640625 7.0625 -7.304688 7.8125 -6.640625 C 8.5625 -5.972656 8.9375 -5.003906 8.9375 -3.734375 C 8.9375 -2.460938 8.5625 -1.492188 7.8125 -0.828125 C 7.0625 -0.160156 6.03125 0.171875 4.71875 0.171875 C 3.40625 0.171875 2.375 -0.15625 1.625 -0.8125 C 0.882812 -1.476562 0.515625 -2.453125 0.515625 -3.734375 C 0.515625 -5.015625 0.882812 -5.984375 1.625 -6.640625 C 2.375 -7.304688 3.40625 -7.640625 4.71875 -7.640625 Z M 4.71875 -5.734375 C 3.789062 -5.734375 3.328125 -5.203125 3.328125 -4.140625 L 3.328125 -3.328125 C 3.328125 -2.265625 3.789062 -1.734375 4.71875 -1.734375 C 5.644531 -1.734375 6.109375 -2.265625 6.109375 -3.328125 L 6.109375 -4.140625 C 6.109375 -5.203125 5.644531 -5.734375 4.71875 -5.734375 Z M 4.71875 -5.734375 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(188.750754, 85.751922)">
                <g>
                  <path d="M 6 -7.640625 C 6.863281 -7.640625 7.515625 -7.398438 7.953125 -6.921875 C 8.390625 -6.441406 8.609375 -5.75 8.609375 -4.84375 L 8.609375 0 L 5.796875 0 L 5.796875 -4.5 C 5.796875 -4.820312 5.710938 -5.078125 5.546875 -5.265625 C 5.378906 -5.460938 5.144531 -5.5625 4.84375 -5.5625 C 4.488281 -5.5625 4.203125 -5.445312 3.984375 -5.21875 C 3.773438 -5 3.671875 -4.722656 3.671875 -4.390625 L 3.671875 0 L 0.84375 0 L 0.84375 -7.46875 L 3.15625 -7.46875 L 3.34375 -6.34375 C 3.632812 -6.738281 4.015625 -7.050781 4.484375 -7.28125 C 4.960938 -7.519531 5.46875 -7.640625 6 -7.640625 Z M 6 -7.640625 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(198.190266, 85.751922)">
                <g>
                  <path d="M 4.71875 -7.640625 C 6.082031 -7.640625 7.125 -7.316406 7.84375 -6.671875 C 8.570312 -6.035156 8.9375 -5.054688 8.9375 -3.734375 L 8.9375 -3.25 L 3.328125 -3.25 C 3.328125 -2.71875 3.445312 -2.3125 3.6875 -2.03125 C 3.925781 -1.757812 4.304688 -1.625 4.828125 -1.625 C 5.296875 -1.625 5.640625 -1.722656 5.859375 -1.921875 C 6.085938 -2.117188 6.203125 -2.382812 6.203125 -2.71875 L 8.9375 -2.71875 C 8.9375 -1.8125 8.585938 -1.101562 7.890625 -0.59375 C 7.203125 -0.0820312 6.203125 0.171875 4.890625 0.171875 C 3.492188 0.171875 2.414062 -0.148438 1.65625 -0.796875 C 0.894531 -1.441406 0.515625 -2.421875 0.515625 -3.734375 C 0.515625 -5.015625 0.882812 -5.984375 1.625 -6.640625 C 2.375 -7.304688 3.40625 -7.640625 4.71875 -7.640625 Z M 4.828125 -5.84375 C 3.941406 -5.84375 3.445312 -5.425781 3.34375 -4.59375 L 6.09375 -4.59375 C 6.09375 -4.976562 5.976562 -5.28125 5.75 -5.5 C 5.53125 -5.726562 5.222656 -5.84375 4.828125 -5.84375 Z M 4.828125 -5.84375 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(207.629778, 85.751922)">
                <g>
                  <path d="M 4.40625 -7.640625 C 5.40625 -7.640625 6.25 -7.441406 6.9375 -7.046875 C 7.632812 -6.660156 7.984375 -6.054688 7.984375 -5.234375 L 5.359375 -5.234375 C 5.359375 -5.503906 5.238281 -5.695312 5 -5.8125 C 4.832031 -5.90625 4.617188 -5.953125 4.359375 -5.953125 C 3.679688 -5.953125 3.34375 -5.796875 3.34375 -5.484375 C 3.34375 -5.296875 3.457031 -5.164062 3.6875 -5.09375 C 3.925781 -5.019531 4.316406 -4.941406 4.859375 -4.859375 C 5.515625 -4.765625 6.0625 -4.648438 6.5 -4.515625 C 6.945312 -4.390625 7.335938 -4.164062 7.671875 -3.84375 C 8.003906 -3.519531 8.171875 -3.066406 8.171875 -2.484375 C 8.171875 -1.523438 7.8125 -0.84375 7.09375 -0.4375 C 6.382812 -0.03125 5.453125 0.171875 4.296875 0.171875 C 3.640625 0.171875 3.019531 0.0820312 2.4375 -0.09375 C 1.851562 -0.28125 1.375 -0.566406 1 -0.953125 C 0.632812 -1.347656 0.453125 -1.84375 0.453125 -2.4375 L 3.078125 -2.4375 L 3.078125 -2.375 C 3.085938 -2.050781 3.21875 -1.828125 3.46875 -1.703125 C 3.726562 -1.578125 4.003906 -1.515625 4.296875 -1.515625 C 5.085938 -1.515625 5.484375 -1.695312 5.484375 -2.0625 C 5.484375 -2.25 5.359375 -2.382812 5.109375 -2.46875 C 4.867188 -2.5625 4.46875 -2.65625 3.90625 -2.75 C 3.238281 -2.863281 2.6875 -2.984375 2.25 -3.109375 C 1.820312 -3.242188 1.445312 -3.46875 1.125 -3.78125 C 0.8125 -4.101562 0.65625 -4.546875 0.65625 -5.109375 C 0.65625 -6.023438 1 -6.675781 1.6875 -7.0625 C 2.382812 -7.445312 3.289062 -7.640625 4.40625 -7.640625 Z M 4.40625 -7.640625 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(216.276766, 85.751922)">
                <g />
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(220.989444, 85.751922)">
                <g>
                  <path d="M 4.40625 -7.640625 C 5.40625 -7.640625 6.25 -7.441406 6.9375 -7.046875 C 7.632812 -6.660156 7.984375 -6.054688 7.984375 -5.234375 L 5.359375 -5.234375 C 5.359375 -5.503906 5.238281 -5.695312 5 -5.8125 C 4.832031 -5.90625 4.617188 -5.953125 4.359375 -5.953125 C 3.679688 -5.953125 3.34375 -5.796875 3.34375 -5.484375 C 3.34375 -5.296875 3.457031 -5.164062 3.6875 -5.09375 C 3.925781 -5.019531 4.316406 -4.941406 4.859375 -4.859375 C 5.515625 -4.765625 6.0625 -4.648438 6.5 -4.515625 C 6.945312 -4.390625 7.335938 -4.164062 7.671875 -3.84375 C 8.003906 -3.519531 8.171875 -3.066406 8.171875 -2.484375 C 8.171875 -1.523438 7.8125 -0.84375 7.09375 -0.4375 C 6.382812 -0.03125 5.453125 0.171875 4.296875 0.171875 C 3.640625 0.171875 3.019531 0.0820312 2.4375 -0.09375 C 1.851562 -0.28125 1.375 -0.566406 1 -0.953125 C 0.632812 -1.347656 0.453125 -1.84375 0.453125 -2.4375 L 3.078125 -2.4375 L 3.078125 -2.375 C 3.085938 -2.050781 3.21875 -1.828125 3.46875 -1.703125 C 3.726562 -1.578125 4.003906 -1.515625 4.296875 -1.515625 C 5.085938 -1.515625 5.484375 -1.695312 5.484375 -2.0625 C 5.484375 -2.25 5.359375 -2.382812 5.109375 -2.46875 C 4.867188 -2.5625 4.46875 -2.65625 3.90625 -2.75 C 3.238281 -2.863281 2.6875 -2.984375 2.25 -3.109375 C 1.820312 -3.242188 1.445312 -3.46875 1.125 -3.78125 C 0.8125 -4.101562 0.65625 -4.546875 0.65625 -5.109375 C 0.65625 -6.023438 1 -6.675781 1.6875 -7.0625 C 2.382812 -7.445312 3.289062 -7.640625 4.40625 -7.640625 Z M 4.40625 -7.640625 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(229.636433, 85.751922)">
                <g>
                  <path d="M 0.953125 -8.359375 L 0.953125 -10.265625 L 3.765625 -10.265625 L 3.765625 -8.359375 Z M 0.953125 0 L 0.953125 -7.46875 L 3.765625 -7.46875 L 3.765625 0 Z M 0.953125 0 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(234.349111, 85.751922)">
                <g />
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(239.06179, 85.751922)">
                <g>
                  <path d="M 0.953125 0 L 0.953125 -10.265625 L 3.765625 -10.265625 L 3.765625 0 Z M 0.953125 0 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(243.774469, 85.751922)">
                <g>
                  <path d="M 0.984375 -8.375 L 2.3125 -10.265625 L 5.03125 -10.265625 L 5.046875 -10.203125 L 2.796875 -8.375 Z M 0.953125 -7.46875 L 3.765625 -7.46875 L 3.765625 0 L 0.953125 0 Z M 0.953125 -7.46875 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(248.487147, 85.751922)">
                <g>
                  <path d="M 10.765625 -7.640625 C 11.617188 -7.640625 12.257812 -7.394531 12.6875 -6.90625 C 13.113281 -6.425781 13.328125 -5.738281 13.328125 -4.84375 L 13.328125 0 L 10.5 0 L 10.5 -4.5 C 10.5 -4.820312 10.421875 -5.078125 10.265625 -5.265625 C 10.109375 -5.460938 9.890625 -5.5625 9.609375 -5.5625 C 9.273438 -5.5625 9.003906 -5.445312 8.796875 -5.21875 C 8.597656 -5 8.5 -4.722656 8.5 -4.390625 L 8.5 0 L 5.671875 0 L 5.671875 -4.5 C 5.671875 -4.820312 5.59375 -5.078125 5.4375 -5.265625 C 5.28125 -5.460938 5.0625 -5.5625 4.78125 -5.5625 C 4.457031 -5.5625 4.191406 -5.445312 3.984375 -5.21875 C 3.773438 -5 3.671875 -4.722656 3.671875 -4.390625 L 3.671875 0 L 0.84375 0 L 0.84375 -7.46875 L 3.15625 -7.46875 L 3.34375 -6.359375 C 3.625 -6.753906 4 -7.066406 4.46875 -7.296875 C 4.9375 -7.523438 5.429688 -7.640625 5.953125 -7.640625 C 7.066406 -7.640625 7.816406 -7.210938 8.203125 -6.359375 C 8.503906 -6.753906 8.878906 -7.066406 9.328125 -7.296875 C 9.785156 -7.523438 10.265625 -7.640625 10.765625 -7.640625 Z M 10.765625 -7.640625 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(262.639338, 85.751922)">
                <g>
                  <path d="M 0.953125 -8.359375 L 0.953125 -10.265625 L 3.765625 -10.265625 L 3.765625 -8.359375 Z M 0.953125 0 L 0.953125 -7.46875 L 3.765625 -7.46875 L 3.765625 0 Z M 0.953125 0 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(267.352017, 85.751922)">
                <g>
                  <path d="M 5.828125 -7.46875 L 5.828125 -5.5625 L 4.25 -5.5625 L 4.25 -2.71875 C 4.25 -2.375 4.304688 -2.125 4.421875 -1.96875 C 4.535156 -1.8125 4.742188 -1.734375 5.046875 -1.734375 L 5.828125 -1.734375 L 5.828125 -0.078125 C 5.609375 -0.00390625 5.316406 0.0507812 4.953125 0.09375 C 4.597656 0.144531 4.285156 0.171875 4.015625 0.171875 C 3.191406 0.171875 2.554688 0.0195312 2.109375 -0.28125 C 1.660156 -0.582031 1.4375 -1.097656 1.4375 -1.828125 L 1.4375 -5.5625 L 0.375 -5.5625 L 0.375 -7.46875 L 1.546875 -7.46875 L 2.15625 -9.734375 L 4.25 -9.734375 L 4.25 -7.46875 Z M 5.828125 -7.46875 " />
                </g>
              </g>
            </g>
            <g fill="#5e17eb" fill-opacity="1">
              <g transform="translate(273.635588, 85.751922)">
                <g>
                  <path d="M 4.71875 -7.640625 C 6.082031 -7.640625 7.125 -7.316406 7.84375 -6.671875 C 8.570312 -6.035156 8.9375 -5.054688 8.9375 -3.734375 L 8.9375 -3.25 L 3.328125 -3.25 C 3.328125 -2.71875 3.445312 -2.3125 3.6875 -2.03125 C 3.925781 -1.757812 4.304688 -1.625 4.828125 -1.625 C 5.296875 -1.625 5.640625 -1.722656 5.859375 -1.921875 C 6.085938 -2.117188 6.203125 -2.382812 6.203125 -2.71875 L 8.9375 -2.71875 C 8.9375 -1.8125 8.585938 -1.101562 7.890625 -0.59375 C 7.203125 -0.0820312 6.203125 0.171875 4.890625 0.171875 C 3.492188 0.171875 2.414062 -0.148438 1.65625 -0.796875 C 0.894531 -1.441406 0.515625 -2.421875 0.515625 -3.734375 C 0.515625 -5.015625 0.882812 -5.984375 1.625 -6.640625 C 2.375 -7.304688 3.40625 -7.640625 4.71875 -7.640625 Z M 4.828125 -5.84375 C 3.941406 -5.84375 3.445312 -5.425781 3.34375 -4.59375 L 6.09375 -4.59375 C 6.09375 -4.976562 5.976562 -5.28125 5.75 -5.5 C 5.53125 -5.726562 5.222656 -5.84375 4.828125 -5.84375 Z M 4.828125 -5.84375 " />
                </g>
              </g>
            </g>
          </svg>
        </Navbar.Brand>

        <NavbarToggle className="border-none shadow-none " onClick={closeMenu}>
          {!expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </NavbarToggle>

        <Navbar.Collapse
          id="responsive-navbar-nav  "
          className="h-screen sm:h-screen md:h-0 lg:h-0 gap-12 "
        >
          <Nav className=" flex w-full  justify-end gap-10  mt-10 sm:mt-0 md:mt-0 lg:mt-0-md:mt-0  ">
            <Nav.Link
              as={Link}
              onClick={toggleChange}
              to={"/"}
              className="text-black font-poppins text-md "
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={toggleChange}
              as={Link}
              to={"/nosotros"}
              className="text-black font-poppins text-md "
            >
              Nosotros
            </Nav.Link>
            <Nav.Link
              onClick={toggleChange}
              as={Link}
              to={"/team"}
              className="text-black font-poppins text-md "
            >
              Team
            </Nav.Link>
            <NavDropdown
              title="Servicios"
              id="collasible-nav-dropdown"
              className=" mr-0 lg:mr-32-md:mr-32  font-poppins text-md   "
            >
              <NavDropdown.Item
                as={Link}
                onClick={toggleChange}
                to={"/desarrollo"}
                className="font-poppins text-sm"
              >
                Desarrollo web
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={toggleChange}
                to={"/soporte"}
                className="font-poppins text-sm"
              >
                Soporte
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                as={Link}
                onClick={toggleChange}
                to={"/mantenimiento"}
                className="font-poppins text-sm"
              >
                Mantenimiento
              </NavDropdown.Item>
            </NavDropdown>
            <button
              onClick={goContacto}
              className=" bg-btm-color hover:bg-primary flex content-center items-center justify-center p-2 w-32 text-white rounded-md hover:bg-primary-blue font-poppins text-md"
            >
              Contacto
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nabvar;

