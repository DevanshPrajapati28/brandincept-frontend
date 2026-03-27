// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaWhatsapp, FaTimes } from "react-icons/fa";

// const FloatingButtons = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Show button after scrolling down 300px
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
    
//     // Auto show popup after 5 seconds
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 5000);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(timer);
//     };
//   }, []);

//   const phoneNumber = "917666307146"; // Without + and country code
//   const message = "Hi! I'd like to order from Mahesh Pavbhaji";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

//   return (
//     <>
//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             initial={{ scale: 0, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0, opacity: 0 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//             className="fixed bottom-6 right-6 z-50"
//           >
//             {/* Popup Message */}
//             <AnimatePresence>
//               {showPopup && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20, scale: 0.8 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 20, scale: 0.8 }}
//                   className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100"
//                 >
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
//                   >
//                     <FaTimes className="text-xs" />
//                   </button>
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
//                       <FaWhatsapp className="text-white text-xl" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold text-sm">Brand Incept</h4>
//                       <p className="text-xs text-gray-500">Online</p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-3">
//                     👋 Hi! How can we help you today?
//                   </p>
//                   <a
//                     href={whatsappUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="block text-center bg-green-500 text-white text-sm font-semibold py-2 rounded-lg hover:bg-green-600 transition-colors"
//                   >
//                     Start Chat
//                   </a>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* WhatsApp Button */}
//             <motion.a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.1, rotate: 5 }}
//               whileTap={{ scale: 0.9 }}
//               onMouseEnter={() => setShowPopup(true)}
//               className="flex items-center justify-center w-14 h-14 bg-linear-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 relative overflow-hidden group"
//             >
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="absolute inset-0 bg-white/20 rounded-full"
//               />
//               <FaWhatsapp className="text-3xl relative z-10 group-hover:rotate-12 transition-transform" />
              
//               {/* Notification Dot */}
//               <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
//             </motion.a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default FloatingButtons;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const [showPopup, setShowPopup] = useState(true); // Popup visible on load

  const phoneNumber = "917622934444"; // +91 76229 34444
  const message = "Hi! I'm interested in your corporate leasing services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Popup Message */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-100"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
            >
              <FaTimes className="text-xs" />
            </button>

            {/* Header with WhatsApp icon and Brandincept logo */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#017dc5] rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div className="flex flex-col">
                <img
                  src="/assests/bluelogo-removebg.png"
                  alt="Brandincept"
                  className="h-6 w-auto object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                    // Fallback text if logo fails to load
                    e.target.insertAdjacentHTML(
                      "afterend",
                      '<span class="font-bold text-sm">Brandincept</span>'
                    );
                  }}
                />
                <p className="text-xs text-gray-800 mt-1">Online</p>
              </div>
            </div>

            <p className="text-sm text-gray-800 mb-3">
              👋 Hi! How can we help you with Corporate Leasing & Franchise Development?
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#017dc5] text-white-300 text-sm font-semibold py-2 rounded-lg hover:bg-green-600"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={() => setShowPopup(true)} // Reopen popup on hover
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#017dc5] to-[#017dc5] text-white rounded-full shadow-2xl hover:shadow-green-500/50 relative overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20 rounded-full"
        />
        <FaWhatsapp className="text-3xl relative z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;