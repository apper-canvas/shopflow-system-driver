import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = 'No items found',
  message = 'Try adjusting your search or browse our categories',
  icon = 'Package',
  actionText = 'Browse Products',
  actionPath = '/products'
}) => {
  const navigate = useNavigate()

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 px-4"
    >
      <div className="text-center max-w-md">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-6"
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-secondary to-teal-400 rounded-full flex items-center justify-center shadow-lg">
            <ApperIcon name={icon} className="w-10 h-10 text-white" />
          </div>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-display font-semibold text-gray-900 mb-2"
        >
          {title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-6"
        >
          {message}
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={() => navigate(actionPath)}
          className="btn-secondary text-white px-6 py-3 rounded-xl font-medium inline-flex items-center space-x-2 shadow-lg"
        >
          <ApperIcon name="ShoppingBag" className="w-4 h-4" />
          <span>{actionText}</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Empty