// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="site-footer">
//       <div className="container footer-inner">
//         <div className="footer-left">
//           <p className="footer-copy">
//             © {year} Minimal Store. All rights reserved.
//           </p>
//           <p className="footer-note">Be the first to know about new stories.</p>
//         </div>
//         <div className="footer-right">
//           <nav aria-label="Footer navigation">
//             <ul className="footer-nav-list">
//               <li>
//                 <a href="/privacy" className="footer-link">
//                   Privacy policy
//                 </a>
//               </li>
//               <li>
//                 <a href="/terms" className="footer-link">
//                   Terms
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="footer-link">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </footer>
//   );
// }





export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <p className="footer-copy">
            © {year} Minimal Store. All rights reserved.
          </p>
          <p className="footer-note">Be the first to know about new stories.</p>
        </div>
        <div className="footer-right">
          <nav aria-label="Footer navigation">
            <ul className="footer-nav-list">
              <li>
                <a href="/privacy" className="footer-link">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="/terms" className="footer-link">
                  Terms
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
