import { useState, useMemo, useCallback, memo } from 'react'
import { menuData, restaurantInfo } from './menuData'
import './App.css'

const MAPS_URL = "https://maps.app.goo.gl/vfRGC8KHMorh7fKV8"

const Header = memo(function Header({ onBack, showBack, categoryName, categoryIcon }) {
  return (
    <header className="header">
      <div className="header-bg"></div>
      <div className="header-content">
        {showBack ? (
          <>
            <button className="back-btn" onClick={onBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <div className="page-title-wrap">
              <span className="page-icon">{categoryIcon}</span>
              <h2 className="page-title">{categoryName}</h2>
            </div>
            <div className="header-spacer"></div>
          </>
        ) : (
          <>
            <div className="logo-section">
              <div className="logo-container">
                <div className="logo-glow"></div>
                <div className="logo-ring">
                  <span className="logo-icon">☕</span>
                </div>
              </div>
              <div className="logo-text">
                <h1 className="brand-name">KADOOLI</h1>
                <span className="brand-sub">TEA PALACE</span>
              </div>
            </div>
            <a href={`tel:${restaurantInfo.phone1}`} className="call-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </>
        )}
      </div>
    </header>
  )
})

const HeroBanner = memo(function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <div className="tagline-badge">{restaurantInfo.tagline}</div>
        
        <div className="contact-pills">
          <a href={`tel:${restaurantInfo.phone1}`} className="pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {restaurantInfo.phone1}
          </a>
          <a href={`tel:${restaurantInfo.phone2}`} className="pill">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            {restaurantInfo.phone2}
          </a>
        </div>

        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="location-card">
          <div className="location-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <span className="location-text">{restaurantInfo.address}</span>
          <span className="map-btn">View Map</span>
        </a>

        <div className="features-strip">
          <div className="feature-chip"><span className="check-icon">✓</span> Free Delivery</div>
          <div className="feature-chip"><span className="check-icon">✓</span> VAT Included</div>
          <div className="feature-chip"><span className="check-icon">✓</span> Cards Accepted</div>
        </div>
      </div>
    </div>
  )
})

const CategoryCard = memo(function CategoryCard({ categoryKey, category, onClick, index }) {
  return (
    <button 
      className="category-card" 
      onClick={() => onClick(categoryKey)}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className="card-image-wrap">
        <img 
          src={category.image} 
          alt={category.name}
          loading="lazy"
          className="card-image"
        />
        <div className="card-overlay"></div>
        <div className="card-badge">{category.items.length}</div>
      </div>
      <div className="card-body">
        <div className="card-text">
          <h3 className="card-title">{category.name}</h3>
          <p className="card-subtitle">{category.nameAr}</p>
        </div>
        <svg className="card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
    </button>
  )
})

const MenuItem = memo(function MenuItem({ item, categoryImage, index }) {
  return (
    <div className="menu-item" style={{ animationDelay: `${index * 0.03}s` }}>
      <div className="item-image-wrap">
        <img 
          src={item.image || categoryImage} 
          alt={item.name}
          loading="lazy"
          className="item-image"
        />
      </div>
      <div className="item-content">
        <h3 className="item-title">{item.name}</h3>
        <p className="item-subtitle">{item.nameAr}</p>
      </div>
      <div className="item-price-tag">
        <span className="price-currency">AED</span>
        <span className="price-value">{item.price}</span>
      </div>
    </div>
  )
})

const CategoryPage = memo(function CategoryPage({ category }) {
  return (
    <div className="category-page">
      <div className="category-header-banner">
        <img 
          src={category.image} 
          alt={category.name}
          className="banner-image"
        />
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <div className="banner-icon-wrap">
            <span className="banner-icon">{category.icon}</span>
          </div>
          <h2 className="banner-title">{category.name}</h2>
          <p className="banner-subtitle">{category.nameAr}</p>
          <div className="banner-count">{category.items.length} items available</div>
        </div>
      </div>
      <div className="items-container">
        {category.items.map((item, idx) => (
          <MenuItem 
            key={idx} 
            item={item} 
            categoryImage={category.image}
            index={idx} 
          />
        ))}
      </div>
    </div>
  )
})

const Footer = memo(function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <span className="footer-logo">☕</span>
          <div>
            <span className="footer-name">KADOOLI</span>
            <span className="footer-tagline">TEA PALACE</span>
          </div>
        </div>
        <p className="footer-motto">"We serve happiness!"</p>
        <div className="footer-links">
          <a href={`tel:${restaurantInfo.phone1}`}>{restaurantInfo.phone1}</a>
          <span className="link-dot">•</span>
          <a href={`tel:${restaurantInfo.phone2}`}>{restaurantInfo.phone2}</a>
        </div>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="footer-address">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {restaurantInfo.address}
        </a>
        <p className="footer-copyright">© 2024 Kadooli Tea Palace</p>
      </div>
      
      <div className="developer-section">
        <div className="dev-header">
          <div className="dev-line"></div>
          <span>Menu Developed By</span>
          <div className="dev-line"></div>
        </div>
        <h4 className="dev-name">Malik Faisal</h4>
        <div className="dev-contacts">
          <a href="tel:+971563111168">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            +971 56 311 1168
          </a>
          <a href="mailto:contact@malikfaisal.com">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            contact@malikfaisal.com
          </a>
          <a href="https://www.malikfaisal.com" target="_blank" rel="noopener noreferrer">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            www.malikfaisal.com
          </a>
        </div>
      </div>
    </footer>
  )
})

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  const categories = useMemo(() => Object.entries(menuData), [])
  const totalItems = useMemo(() => 
    Object.values(menuData).reduce((sum, cat) => sum + cat.items.length, 0), 
  [])

  const handleCategoryClick = useCallback((key) => {
    setSelectedCategory(key)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleBack = useCallback(() => {
    setSelectedCategory(null)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="app">
      <Header 
        showBack={!!selectedCategory} 
        onBack={handleBack}
        categoryName={selectedCategory ? menuData[selectedCategory].name : ''}
        categoryIcon={selectedCategory ? menuData[selectedCategory].icon : ''}
      />
      
      {!selectedCategory ? (
        <>
          <HeroBanner />
          <main className="main-content">
            <div className="section-header">
              <h2 className="section-title">Our Menu</h2>
              <div className="section-stats">
                <span className="stat"><strong>{categories.length}</strong> Categories</span>
                <span className="stat-dot"></span>
                <span className="stat"><strong>{totalItems}</strong> Items</span>
              </div>
            </div>
            <div className="categories-grid">
              {categories.map(([key, category], index) => (
                <CategoryCard 
                  key={key}
                  categoryKey={key}
                  category={category}
                  onClick={handleCategoryClick}
                  index={index}
                />
              ))}
            </div>
          </main>
        </>
      ) : (
        <CategoryPage category={menuData[selectedCategory]} />
      )}
      
      <Footer />
    </div>
  )
}

export default App
