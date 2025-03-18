; xml representation, utilities and renderer

(define-library (xml)
  
(export
; <elem>
elem
elem?
elem-tag elem-tag-set! 
elem-attributes elem-attributes-set!
elem-children elem-children-set!  

leaf? 
render
) ; export 
  
(import (scheme base))

(begin

(define-record-type <elem>
  (elem tag attributes children)
  elem?
  (tag elem-tag elem-tag-set!)
  (attributes elem-attributes elem-attributes-set!)
  (children elem-children elem-children-set!))

(define (leaf? elem)
  (equal? (vector-length (elem-children elem)) 0))

(define (render elem)
  #f)

)) ; define-library (xml) 