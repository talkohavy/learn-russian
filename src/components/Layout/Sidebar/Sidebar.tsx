import SideBarLinkList from './SideBarLinkList';

export default function Sidebar() {
  return (
    <nav
      className={
        'relative flex h-full flex-col items-start justify-start bg-amber-50 p-10 shadow-md transition-all duration-300 dark:bg-slate-500 w-48'
      }
    >
      <SideBarLinkList />
    </nav>
  );
}
