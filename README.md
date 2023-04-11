**Partial Rendering
**When navigating between sibling routes (e.g. /dashboard/settings and /dashboard/analytics below), Next.js will only fetch and render the layouts and pages in routes that change. It will not re-fetch or re-render anything above the segments in the subtree. This means that in routes that share a layout, the layout will be preserved when a user navigates between sibling pages.


**Without partial rendering**, each navigation would cause the full page to re-render on the server. Rendering only the segment that’s updating reduces the amount of data transferred and execution time, leading to improved performance.

