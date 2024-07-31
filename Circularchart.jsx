import React from 'react';

const CircularChart = () => {
  const segments = [
    { color: '#FFD700', percentage: 45 },  // Yellow
    { color: '#00CED1', percentage: 30 },  // Turquoise
    { color: '#FF69B4', percentage: 15 },  // Pink
    { color: '#32CD32', percentage: 10 },  // Green
  ];

  const radius = 50;
  const strokeWidth = 20;
  const center = radius + strokeWidth / 2;
  const size = (radius + strokeWidth) * 2;

  let startAngle = 0;

  return (
    <svg width={size} height={size}>
      {segments.map((segment, index) => {
        const endAngle = startAngle + (segment.percentage / 100) * 360;
        const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
        
        const start = polarToCartesian(center, center, radius, startAngle);
        const end = polarToCartesian(center, center, radius, endAngle);

        const d = [
          "M", start.x, start.y,
          "A", radius, radius, 0, largeArcFlag, 1, end.x, end.y
        ].join(" ");

        startAngle = endAngle;

        return <path key={index} d={d} fill="none" stroke={segment.color} strokeWidth={strokeWidth} />;
      })}
    </svg>
  );
};

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

export default CircularChart;