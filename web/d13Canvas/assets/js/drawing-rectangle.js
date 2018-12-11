class DrawingRectangle extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal
    }

    onMouseDown(coord, event){
        this.contextReal.fillStroke = '#f44';
        this.contextReal.strokeStyle = '#000000';
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1]

    }

    onDragging(coord, event){
        this.contextDraft.fillStroke = '#f44';
        this.contextDraft.strokeStyle = '#000000'; 
        this.contextDraft.lineWidth = 5;
        this.contextDraft.clearRect(0,0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.fillRect(this.origX, this.origY, coord[0]-this.origX, coord[1]-this.origY)
        this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);        
        this.contextDraft.fill(); 
        this.contextDraft.stroke();
        this.contextDraft.closePath();
       }

       onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);        
        this.contextReal.fill();        
        this.contextReal.stroke();
        this.contextReal.closePath();
       

    }

    onMouseMove(){}
    onMouseLeave(){}
    onMouseEnter(){}

}