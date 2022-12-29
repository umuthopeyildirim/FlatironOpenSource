// import { useEffect, useState } from 'react';
// import { openDB } from 'idb';

// const useCourses = (lessonId) => {
//   const [course, setCourse] = useState(null);

//     // Check if the lesson exists in the IndexedDB
//     const getCourse = async (lessonId) => {
//       const db = await openDB('courses', 1);
//       const tx = db.transaction('courses', 'readwrite');
//       const storedCourse = await tx.get('courses', lessonId);
//       if (storedCourse) {
//         setCourse(storedCourse);
//       } else {
//         // If the lesson does not exist in the IndexedDB, fetch it from the API
//         const response = await fetch(`https://workers.flatironopensource.ml/course/${lessonId}`);
//         const data = await response.json();
//         setCourse(data);

//         // Store the lesson in the IndexedDB
//         await tx.put('courses', data, lessonId);
//       }
//     };

//     getCourse(lessonId);
//   return course;
// }

// export { useCourses };