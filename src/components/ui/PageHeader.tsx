import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

type TBreadcrumbItem = {
  name: string;
  path: string;
};

type TPageHeaderProps = {
  title: string;
  subTitle: string;
};

const PageHeader = ({ title, subTitle }: TPageHeaderProps) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbs = pathnames.map((name, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;
    
    return {
      name: name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
      path: routeTo,
      isLast
    };
  });

  return (
    <div className="bg-gradient-to-r from-primary to-primary/70 text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-6">
            {subTitle}
          </p>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center text-sm md:text-base" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-1 md:space-x-3">
              <li>
                <Link to="/" className="flex items-center text-blue-100 hover:text-white transition-colors">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.path} className="flex items-center">
                  <span className="w-px h-4 bg-blue-200 mx-3"></span>
                  {breadcrumb.isLast ? (
                    <span className="text-white font-medium">{breadcrumb.name}</span>
                  ) : (
                    <Link
                      to={breadcrumb.path}
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      {breadcrumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;