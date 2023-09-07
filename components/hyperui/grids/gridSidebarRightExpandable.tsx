const GridSidebarRightExpandable = () => {
    return ( 
        <div
  className="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[1fr_120px] lg:gap-8 lg:[&:has(>*:last-child:hover)]:grid-cols-[1fr_160px]"
>
  <div className="h-32 rounded-lg bg-gray-100"></div>
  <div className="h-32 rounded-lg bg-gray-100"></div>
</div>
     );
}
 
export default GridSidebarRightExpandable;