; markup language implementation and renderer 

(define-library (markup)

(export
  parse-file
) ; export
  
(import 
  (scheme base)
  (scheme file)
  (prefix (xml) xml:)
) ; import 

(begin 

(define-record-type <pos>
  (pos filename line col)
  pos? 
  (filename pos-filename pos-filename-set!)
  (line pos-line pos-line-set!)
  (col pos-col pos-col-set!))

(define-record-type <pstate>
  (pstate filename port)
  pstate?
  (filename pstate-filename)
  (port pstate-port))

(define (parse-file filename)
  (call-with-input-file filename
    (lambda (port)
      (let ((pstate (pstate filename port)))
        #f))))

)) ; define-library (markup)