import React from "react";
import SkeletonLoader from 'react-native-skeleton-content';
import ProductCard from '../ProductCard';

const Skeleton = (props) => {
  <SkeletonContent isLoading={true} >
    <ProductCard />
  </SkeletonContent>
}

export default Skeleton;

