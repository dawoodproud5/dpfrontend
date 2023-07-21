import React, { useState, useEffect } from 'react';

function SiderBar({ liItem, sectionIds }) {


  useEffect(() => {

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollPosition = window.scrollY + 20;

    const currentSectionIds = sectionIds.filter((id) => {
      const element = document.getElementById(id);
      return element && element.offsetTop <= scrollPosition;
    });
    const currentSectionId = currentSectionIds[currentSectionIds.length - 1];
    const activeListItem = document.querySelector(`[href="#${currentSectionId}"]`);
    const activeListItems = document.querySelectorAll(".active");
    activeListItems.forEach((item) => item.classList.remove("active"));
    if (activeListItem) {
      activeListItem.parentElement.classList.add("active");
    }
  }

  return (
    <div className="max-w-xl mx-auto text-[black] font-Inter border-r-2 border-[gray]/30 ">
      <aside className="w-full " aria-label="Sidebar">
        <div className="px-0 py-4 overflow-y-auto  mt-8 text-left grid grid-cols-12">
          <div className='col-start-4 col-span-8'>
            <h2 className="text-lg  font-normal self-start">Content</h2>
            <ul className="space-y-2 py-4 ">
              {liItem.map((item, index) => (
                <li key={index} className="w-full flex">
                  <a href={`#${item.id}`} className="font-normal text-[14px]">
                    <span className="hover:text-[#0070f3] ">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SiderBar;
