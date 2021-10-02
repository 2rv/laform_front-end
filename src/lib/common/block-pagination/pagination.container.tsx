import { useState, useEffect, useRef, RefObject } from 'react';
import { PaginationComponent } from './pagination.component';
import { PaginationContainerProps } from './pagination.type';

export function PaginationContainer(props: PaginationContainerProps) {
  const { totalItems, listItems, pending, paginationAction, ...otherProps } =
    props;

  if (!listItems || listItems.length <= 0) return null;

  const containerRef: RefObject<any> = useRef(undefined);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    if (fetching && totalItems > listItems.length) {
      const newPage = Math.ceil(page + 1);
      setPage(newPage);
      paginationAction(newPage, setFetching);
    }
  }, [fetching]);

  useEffect(() => {
    const togglePagination = () => {
      const isScrolled =
        containerRef.current.getBoundingClientRect().bottom <
        window.innerHeight + 200;
      if (isScrolled && !fetching) {
        setFetching(true);
      }
    };
    document.addEventListener('scroll', togglePagination);
    return () => document.removeEventListener('scroll', togglePagination);
  }, []);
  console.log(pending);

  return (
    <div ref={containerRef}>
      <PaginationComponent
        listItems={listItems}
        pending={pending}
        {...otherProps}
      />
    </div>
  );
}

// const togglePagination = () => {
//     const total = articlesState?.additional?.totalCount || 0;
//     const current = articlesState?.additional?.currentCount || 0;
//     if (
//       containerRef.current.getBoundingClientRect().bottom <
//         window.innerHeight &&
//       !isPending &&
//       total > current &&
//       !isPagination
//     ) {
//       isPagination = true;
//       dispatch(
//         articlesPaginationData(
//           currentLang,
//           isAuth,
//           currentPage + 1,
//           filter.where,
//           filter.sort,
//           filter.by,
//         ),
//       );
//       setPage(currentPage + 1);
//     }
//   };

//   useEffect(() => {
//     dispatch(articlesUploadData(currentLang, isAuth));
//     document.addEventListener('scroll', togglePagination);
//     return () => document.removeEventListener('scroll', togglePagination);
//   }, []);
