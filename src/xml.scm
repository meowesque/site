(define-library (xml)
  
(export)
  
(import (scheme base))

(begin
  
(define-record-type <elem>
  (elem tag attributes children)
  elem?
  (tag elem-tag elem-tag-set!)
  (attributes elem-attributes elem-attributes-set!)
  (children elem-children elem-children-set!))

)) ; define-library xml 