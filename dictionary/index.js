const datastore = {
    index: [],
    data: []
}

const dictionary = {
    addIndex: (index) => {
        datastore.index.push(index)
        return dictionary.getDatastoreSize()
    },

    addData: (data) => {
        datastore.data.push(data)
        return dictionary.getDatastoreSize()
    },

    getDatastoreSize: () => {
        return datastore.index.length + datastore.data.length
    }
}

module.exports = dictionary