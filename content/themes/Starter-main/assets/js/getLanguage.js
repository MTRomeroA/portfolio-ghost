export default function setLanguage() {
   const pageLang = language;
   document.documentElement.setAttribute("lang", pageLang);
}
/*
export default function infiniteScroll() {
    
    if (!link) { return; }

    const options = {
        // When the last card is within a 150px of the viewport, fetch the next page. This provides a smoother transition between pages 
       rootMargin: '150px',
    }

    const callback = (entries, observer) => {
        try {
            entries.forEach(entry => {
            
                if (entry.isIntersecting) {
                    
                    if (link) {
                        getNextPage(link).then(({posts, nextLink}) => {
                            posts.forEach(post => {
                                document.querySelector('.gh-postfeed').append(post)
                            })

                            if (nextLink) {
                                link = nextLink;
                                observer.observe(document.querySelector('.post:last-of-type'))
                            } else {
                                observer.disconnect()
                            }
                        })
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    let observer = new IntersectionObserver(callback, options);

    observer.observe(document.querySelector('.post:last-of-type'))

} */