const openDiscountDetail = [...document.getElementsByClassName('open-details')];
const detailsBlocks = [...document.getElementsByClassName('discount-details')];

openDiscountDetail.forEach((item, i) => {
    item.onclick = () => {
        if (detailsBlocks[i].style.display !== 'block') {
            detailsBlocks[i].style.display = 'block';
            setTimeout((() => {
                detailsBlocks[i].style.opacity = '1';
            }), );
        } else {
            detailsBlocks[i].style.opacity = '0';
            setTimeout(() => {
                detailsBlocks[i].style.display = 'none';
            }, 500)
        }
    }
})


