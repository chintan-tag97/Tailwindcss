import { useState } from "react";

import "./style.css";

function App() {
  const [] = useState(0);

  return (
    <>
      <button className="bg-sky-500 hover:bg-sky-700 ">Save changes</button>
      <div className="p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-gray-500">Light mode</p>
        <div className="rounded-lg bg-white px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </span>
          </div>
          <p className="mt-5 text-base font-medium tracking-tight text-gray-900">
            Writes upside-down
          </p>
          <p className="mt-2 text-sm text-gray-500">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 p-8 pt-7">
        <p className="mb-2 text-sm font-medium text-gray-400">Dark mode</p>
        <div className="rounded-lg bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </span>
          </div>
          <p className="mt-5 text-base font-medium tracking-tight text-white">
            Writes upside-down
          </p>
          <p className="mt-2 text-sm text-gray-400">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>

      <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <img
          className="size-12 shrink-0"
          src="/assets/react.svg"
          alt="ChitChat Logo"
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">
            ChitChat
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            You have a new message!
          </p>
        </div>
      </div>

      <label className="break-before-left
has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ...">
        <svg fill="currentColor">
          <img className="size-12 shrink-0 " src="/img/react.svg" />
        </svg>
        Google Pay
        <input type="radio" className="checked:border-indigo-500 ..." />
      </label>
      <label className="break-before-right
has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ...">
        Pay
        <input type="radio" className="checked:border-indigo-500 ..." />
      </label>
      <label className="has-checked:bg-indigo-50 has-checked:text-indigo-900 has-checked:ring-indigo-200 dark:has-checked:bg-indigo-950 dark:has-checked:text-indigo-200 dark:has-checked:ring-indigo-900 ...">
        GPay
        <input type="radio" className="checked:border-indigo-500 ..." />
      </label>
      <div className="@container">
        <div className="flex flex-col @8xl:flex-row">Tailwind</div>
        <div className="bg-white dark:bg-black">Tailwibd css </div>
      </div>
      <button className="btn-primary">Button</button>


      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="p-8 pt-7">
          <p className="mb-2 text-sm font-medium text-gray-500">Light mode</p>
          <div className="rounded-lg bg-white px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="mt-5 text-base font-medium tracking-tight text-gray-900">
              Writes upside-down
            </p>
            <p className="mt-2 text-sm text-gray-500">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 p-8 pt-7">
          <p className="mb-2 text-sm font-medium text-gray-400">Dark mode</p>
          <div className="rounded-lg bg-gray-800 px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div>
              <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="mt-5 text-base font-medium tracking-tight text-white">
              Writes upside-down
            </p>
            <p className="mt-2 text-sm text-gray-400">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </div>

      <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />World
</span>
<span className="break-inside-avoid-column
box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
  Hello<br />World
</span>

<div className="not-prose overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
<div className="px-3">
  <div className="relative mx-auto h-80 max-w-md overflow-hidden bg-white ring-1 shadow-lg ring-gray-900/5 dark:bg-gray-800">
  <div className="absolute top-0 right-0 left-0 flex items-center bg-gray-50/90 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-gray-900/10 backdrop-blur-sm dark:bg-gray-700/90 dark:text-gray-200 dark:ring-black/10">Contacts</div>
  <div className="flex h-80 flex-col divide-y divide-gray-200 overflow-auto dark:divide-gray-200/5">
  <div className="flex items-center gap-4 p-4"><img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
  <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Andrew Alfred</strong></div>
  <div className="flex items-center gap-4 p-4"><img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
  <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Debra Houston</strong></div><div className="flex items-center gap-4 p-4"><img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
  <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Jane White</strong></div><div className="flex items-center gap-4 p-4"><img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
  <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Ray Flint</strong></div><div className="flex items-center gap-4 p-4"><img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
  <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">Mindy Albrect</strong></div><div className="flex items-center gap-4 p-4"><img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"/>
  <strong className="text-sm font-medium text-gray-900 dark:text-gray-200">David Arnold</strong>
  </div>
  </div>
  </div>
  </div>
  </div>

  <div className="flex ...">
  <div className="h-16 flex-1 ... bg-sky-300">01</div>
  <div className="h-16 w-32 shrink-0 ... bg-red-300">02</div>
  <div className="h-16 flex-1 ... bg-green-300">03</div>
</div>

<p className="text-blue-600/100 dark:text-sky-400/100">The quick brown fox...</p>

<p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">
  Hello world
</p>

<div className="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
<div className="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
<div className="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
<div className="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>


<div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
<div className="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
<div className="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>


<div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
<div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
<div className="size-18 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>

<div className="scheme-light ...">
  <input type="date" />
</div>

    </>
  );
}

export default App;
