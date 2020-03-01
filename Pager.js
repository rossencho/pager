//function constructor
function Pager(items, pageSize) {
    this.items = items;
    this.pageSize = pageSize;
    this.totalPages = Math.ceil(items.length/pageSize);
    this.currentPage = 0;
    this.visibleItems = [];
}


Pager.prototype.getItems = function(){
    this.visibleItems =[];
    startIndex = this.currentPage * this.pageSize;
    endIndex = this.currentPage * this.pageSize+this.pageSize;
    for (var i=startIndex; i<endIndex;i++){
        this.visibleItems.push(this.items[i]);
    }
    // return this.visibleItems;
}

Pager.prototype.firstPage = function() {
    this.currentPage = 0;
    this.getItems();
}

Pager.prototype.lastPage = function() {
    this.currentPage = this.totalPages-1;
    this.getItems();
}

Pager.prototype.nextPage = function() {
    this.currentPage+=1;
    if (this.currentPage > this.totalPages -1) {
        this.currentPage = this.totalPages -1;
    }
    this.getItems();
}

Pager.prototype.prevPage = function() {
    this.currentPage-=1;
    if (this.currentPage < 0) {
        this.currentPage = 0;
    }
    this.getItems();
}


Pager.prototype.goToPage = function(pageNum) {
    this.currentPage = pageNum-1;
    this.getItems();
}


var pager = new Pager([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 3);
pager.firstPage();
console.log(pager.visibleItems);

pager.nextPage();
console.log(pager.visibleItems);
pager.nextPage();
console.log(pager.visibleItems);
pager.prevPage();
console.log(pager.visibleItems);
pager.goToPage(3);
console.log(pager.visibleItems);
