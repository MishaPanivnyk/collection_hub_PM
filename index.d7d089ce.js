var generateFirstListsContainer=function(){var n=!0,a=!1,t=void 0;try{for(var e,i=CONFIG.firstlistsContainer[Symbol.iterator]();!(n=(e=i.next()).done);n=!0){var c=e.value,s='\n        <div class="card list list__'.concat(c.id,'" id="list_').concat(c.id,'">\n          <i class="listIcon" icon-name="').concat(c.icon,'"></i>\n          <a\n          target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n          href="').concat(c.links[0].link,'"\n          class="listItem"\n          >').concat(c.links[0].name,'</a>\n          <a\n          target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n          href="').concat(c.links[1].link,'"\n          class="listItem"\n          >').concat(c.links[1].name,'</a>\n          <a\n          target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n          href="').concat(c.links[2].link,'"\n          class="listItem"\n          >').concat(c.links[2].name,'</a>\n          <a\n          target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n          href="').concat(c.links[3].link,'"\n          class="listItem"\n          >').concat(c.links[3].name,"</a>\n        </div>\n      ");lists_1.insertAdjacentHTML("beforeend",s)}}catch(n){a=!0,t=n}finally{try{n||null==i.return||i.return()}finally{if(a)throw t}}},generateSecondListsContainer=function(){var n=!0,a=!1,t=void 0;try{for(var e,i=CONFIG.secondListsContainer[Symbol.iterator]();!(n=(e=i.next()).done);n=!0){var c=e.value,s='\n        <div class="card list list__'.concat(c.id,'" id="list_').concat(c.id,'">\n        <i class="listIcon" icon-name="').concat(c.icon,'"></i>\n        <a\n        target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n        href="').concat(c.links[0].link,'"\n        class="listItem"\n        >').concat(c.links[0].name,'</a>\n        <a\n        target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n        href="').concat(c.links[1].link,'"\n        class="listItem"\n        >').concat(c.links[1].name,'</a>\n        <a\n        target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n        href="').concat(c.links[2].link,'"\n        class="listItem"\n        >').concat(c.links[2].name,'</a>\n        <a\n        target="').concat(CONFIG.openInNewTab?"_blank":"",'"\n        href="').concat(c.links[3].link,'"\n        class="listItem"\n        >').concat(c.links[3].name,"</a>\n        </div>\n      ");lists_2.insertAdjacentHTML("beforeend",s)}}catch(n){a=!0,t=n}finally{try{n||null==i.return||i.return()}finally{if(a)throw t}}},generateLists=function(){switch(CONFIG.bentoLayout){case"bento":generateFirstListsContainer();break;case"lists":generateFirstListsContainer(),generateSecondListsContainer()}};generateLists();
//# sourceMappingURL=index.d7d089ce.js.map
