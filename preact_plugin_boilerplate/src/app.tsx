import { AsdfTest } from './testcomp/test.tsx';

export function App() {

  (() => {
	  // this will make sure that $ is always jQuery, even if other libraries are loaded that use $
	  $ = $.noConflict();
	  console.log("asdf")
  })();

  return (
      <>
		<AsdfTest />
      </>
  )
}
