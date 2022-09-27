const Pagination = (a)=> {
    const item_per_page = 10;
    const number_of_page = Math.ceil(a.length/item_per_page);
    const array_length = Array.from({length: number_of_page}, (_, index) => {

        const start = item_per_page * index;
        
        return a.slice(start, start + item_per_page);

    })


    return array_length;
}

export default Pagination;