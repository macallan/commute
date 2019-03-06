//
//  TransportationTypeView.swift
//  iOS-Commute
//
//  Created by Macallan Brown on 2/20/19.
//  Copyright © 2019 com.macallanbrown. All rights reserved.
//

import UIKit

class TransportationTypeView: UIStackView {

    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */
    
    @IBInspectable var labelText: String {
        get {
            return self._labelText
        }
        set {
            self._labelText = newValue
            self.setupView()
        }
    }
    
    @IBInspectable var image: UIImage {
        get {
            return self._image
        }
        set {
            self._image = newValue
            self.setupView()
        }
    }
    
    private var _image = UIImage()
    private var _labelText = ""
    
    let label = UILabel()
    let imageView = UIImageView()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        
        self.axis = .vertical
        self.alignment = .center
        self.distribution = .equalCentering
        
        self.addArrangedSubview(label)
        self.addArrangedSubview(imageView)
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        
        self.axis = .vertical
        self.alignment = .center
        self.distribution = .equalCentering
        self.spacing = 10
                
        self.addArrangedSubview(label)
        self.addArrangedSubview(imageView)
    }
    
    func setupView() {
        self.label.text = self.labelText
        self.imageView.image = self.image
    }
}


