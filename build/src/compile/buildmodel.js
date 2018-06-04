"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var log = tslib_1.__importStar(require("../log"));
var spec_1 = require("../spec");
var concat_1 = require("./concat");
var facet_1 = require("./facet");
var layer_1 = require("./layer");
var repeat_1 = require("./repeat");
var unit_1 = require("./unit");
function buildModel(spec, parent, parentGivenName, unitSize, repeater, config, fit) {
    if (spec_1.isFacetSpec(spec)) {
        return new facet_1.FacetModel(spec, parent, parentGivenName, repeater, config);
    }
    if (spec_1.isLayerSpec(spec)) {
        return new layer_1.LayerModel(spec, parent, parentGivenName, unitSize, repeater, config, fit);
    }
    if (spec_1.isUnitSpec(spec)) {
        return new unit_1.UnitModel(spec, parent, parentGivenName, unitSize, repeater, config, fit);
    }
    if (spec_1.isRepeatSpec(spec)) {
        return new repeat_1.RepeatModel(spec, parent, parentGivenName, repeater, config);
    }
    if (spec_1.isConcatSpec(spec)) {
        return new concat_1.ConcatModel(spec, parent, parentGivenName, repeater, config);
    }
    throw new Error(log.message.INVALID_SPEC);
}
exports.buildModel = buildModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRtb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21waWxlL2J1aWxkbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0RBQThCO0FBQzlCLGdDQUEySDtBQUMzSCxtQ0FBcUM7QUFDckMsaUNBQW1DO0FBQ25DLGlDQUFtQztBQUVuQyxtQ0FBcUM7QUFFckMsK0JBQWlDO0FBRWpDLG9CQUEyQixJQUFvQixFQUFFLE1BQWEsRUFBRSxlQUF1QixFQUNyRixRQUEwQixFQUFFLFFBQXVCLEVBQUUsTUFBYyxFQUFFLEdBQVk7SUFDakYsSUFBSSxrQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE9BQU8sSUFBSSxrQkFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN4RTtJQUVELElBQUksa0JBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLElBQUksa0JBQVUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN2RjtJQUVELElBQUksaUJBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksZ0JBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN0RjtJQUVELElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLElBQUksb0JBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDekU7SUFFRCxJQUFJLG1CQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdEIsT0FBTyxJQUFJLG9CQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3pFO0lBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUF2QkQsZ0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBsb2cgZnJvbSAnLi4vbG9nJztcbmltcG9ydCB7aXNDb25jYXRTcGVjLCBpc0ZhY2V0U3BlYywgaXNMYXllclNwZWMsIGlzUmVwZWF0U3BlYywgaXNVbml0U3BlYywgTGF5b3V0U2l6ZU1peGlucywgTm9ybWFsaXplZFNwZWN9IGZyb20gJy4uL3NwZWMnO1xuaW1wb3J0IHtDb25jYXRNb2RlbH0gZnJvbSAnLi9jb25jYXQnO1xuaW1wb3J0IHtGYWNldE1vZGVsfSBmcm9tICcuL2ZhY2V0JztcbmltcG9ydCB7TGF5ZXJNb2RlbH0gZnJvbSAnLi9sYXllcic7XG5pbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7UmVwZWF0TW9kZWx9IGZyb20gJy4vcmVwZWF0JztcbmltcG9ydCB7UmVwZWF0ZXJWYWx1ZX0gZnJvbSAnLi9yZXBlYXRlcic7XG5pbXBvcnQge1VuaXRNb2RlbH0gZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTW9kZWwoc3BlYzogTm9ybWFsaXplZFNwZWMsIHBhcmVudDogTW9kZWwsIHBhcmVudEdpdmVuTmFtZTogc3RyaW5nLFxuICB1bml0U2l6ZTogTGF5b3V0U2l6ZU1peGlucywgcmVwZWF0ZXI6IFJlcGVhdGVyVmFsdWUsIGNvbmZpZzogQ29uZmlnLCBmaXQ6IGJvb2xlYW4pOiBNb2RlbCB7XG4gIGlmIChpc0ZhY2V0U3BlYyhzcGVjKSkge1xuICAgIHJldHVybiBuZXcgRmFjZXRNb2RlbChzcGVjLCBwYXJlbnQsIHBhcmVudEdpdmVuTmFtZSwgcmVwZWF0ZXIsIGNvbmZpZyk7XG4gIH1cblxuICBpZiAoaXNMYXllclNwZWMoc3BlYykpIHtcbiAgICByZXR1cm4gbmV3IExheWVyTW9kZWwoc3BlYywgcGFyZW50LCBwYXJlbnRHaXZlbk5hbWUsIHVuaXRTaXplLCByZXBlYXRlciwgY29uZmlnLCBmaXQpO1xuICB9XG5cbiAgaWYgKGlzVW5pdFNwZWMoc3BlYykpIHtcbiAgICByZXR1cm4gbmV3IFVuaXRNb2RlbChzcGVjLCBwYXJlbnQsIHBhcmVudEdpdmVuTmFtZSwgdW5pdFNpemUsIHJlcGVhdGVyLCBjb25maWcsIGZpdCk7XG4gIH1cblxuICBpZiAoaXNSZXBlYXRTcGVjKHNwZWMpKSB7XG4gICAgcmV0dXJuIG5ldyBSZXBlYXRNb2RlbChzcGVjLCBwYXJlbnQsIHBhcmVudEdpdmVuTmFtZSwgcmVwZWF0ZXIsIGNvbmZpZyk7XG4gIH1cblxuICBpZiAoaXNDb25jYXRTcGVjKHNwZWMpKSB7XG4gICAgcmV0dXJuIG5ldyBDb25jYXRNb2RlbChzcGVjLCBwYXJlbnQsIHBhcmVudEdpdmVuTmFtZSwgcmVwZWF0ZXIsIGNvbmZpZyk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IobG9nLm1lc3NhZ2UuSU5WQUxJRF9TUEVDKTtcbn1cbiJdfQ==