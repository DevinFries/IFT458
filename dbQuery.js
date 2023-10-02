class DatabaseQuery {
    constructor(query, queryParams) {
        this.query = query;
        this.queryParams = queryParams;
    }

    filter() {
        const filterParams = { ...this.queryParams };
        const excludedFilters = ['page', 'sort', 'limit', 'fields'];
        excludedFilters.forEach(filter => delete filterParams[filter]);

        // Advanced filtering with comparison operators
        let filterString = JSON.stringify(filterParams);
        filterString = filterString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(filterString));

        return this;
    }

    sort() {
        if (this.queryParams.sort) {
            const sortBy = this.queryParams.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }

        return this;
    }

    selectFields() {
        if (this.queryParams.fields) {
            const selectedFields = this.queryParams.fields.split(',').join(' ');
            this.query = this.query.select(selectedFields);
        } else {
            this.query = this.query.select('-__v');
        }

        return this;
    }

    paginateResults() {
        const page = this.queryParams.page * 1 || 1;
        const limit = this.queryParams.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}

module.exports = DatabaseQuery;