import { motion } from 'framer-motion'

const Loading = ({ type = 'products' }) => {
  const renderProductGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-4 shadow-sm"
        >
          <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4 shimmer"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4 shimmer"></div>
            <div className="flex justify-between items-center">
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-20 shimmer"></div>
              <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-16 shimmer"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )

  const renderProductDetail = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-4">
        <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shimmer"></div>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl shimmer"></div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
        <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/3 shimmer"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-2/3 shimmer"></div>
        </div>
        <div className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl shimmer"></div>
      </div>
    </div>
  )

  const renderCartItems = () => (
    <div className="space-y-4">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shimmer"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2 shimmer"></div>
          </div>
          <div className="h-8 w-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded shimmer"></div>
        </motion.div>
      ))}
    </div>
  )

  const renderType = () => {
    switch (type) {
      case 'product-detail':
        return renderProductDetail()
      case 'cart':
        return renderCartItems()
      default:
        return renderProductGrid()
    }
  }

  return (
    <div className="animate-pulse">
      {renderType()}
    </div>
  )
}

export default Loading